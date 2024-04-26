import { AfterViewInit, Component,ElementRef,Inject, ViewChild } from '@angular/core';
import { MaterialModule } from 'apps/material.module';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Property } from '../models/property';
import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageData } from '../models/imageData';
import { PropertyService } from '../services/property.service';
declare var google: any; // Declare google variable

@Component({
  selector: 'app-property-dialog-component',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
  ],
})
export class PropertyDialogComponent implements AfterViewInit {

  @ViewChild('map', { static: false })
  mapContainer!: ElementRef;

  marker: any;
  map: any;
  lat: number =0;
  lng: number =0;
  constructor(
    private propertyService: PropertyService,
    public dialogRef: MatDialogRef<PropertyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Property,
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    let userLocation;
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.lat = userLocation.lat;
        this.lng = userLocation.lng;
        const mapProperties = {
          center: new google.maps.LatLng(userLocation.lat, userLocation.lng),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };   
        this.map = new google.maps.Map(document.getElementById('map'), mapProperties);

        this.marker = new google.maps.Marker({
          position: mapProperties.center,
          map: this.map,
          draggable: true
        });
        google.maps.event.addListener(this.marker, 'dragend', (event: any) => {
          this.lat = event.latLng.lat();
          this.lng = event.latLng.lng();
        });   
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  isLoading = false;
  imagesOutOfBound = false;
  submitted = false;
  primaryImageLocal: ImageData = {
    url: '',
    file: null
  }
  secondaryImagesLocal: ImageData[] = []
  onPrimaryImageSelected(event: any) {
    this.getPrimaryImageUrl(event.target.files[0]);
    
  }
  onSecondaryImageSelected(event: any) {
    const images: FileList = event.target.files;
    if (this.secondaryImagesLocal.length + images.length > 4) {
      this.imagesOutOfBound = true;
      return;
    }
    for (let i = 0; i < images.length; i++) {
      const image = images.item(i);
      if (image != null)
        this.pushSecondaryImageUrl(image);
    }
  }
  getPrimaryImageUrl(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.primaryImageLocal = {
        url: e.target.result,
        file: file,
      }
    }
    reader.readAsDataURL(file)
  }
  pushSecondaryImageUrl(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.secondaryImagesLocal.push({ url: e.target.result, file: file })
    }
    reader.readAsDataURL(file)
  }
  resetPrimaryImage() {
    this.primaryImageLocal = { url: '', file: null }
  }
  createProperty() {
    this.isLoading = true;
    this.submitted = true;
    if (this.primaryImageLocal.file != null) {
      this.data.coordinatesLat = this.lat;
      this.data.coordinatesLng = this.lng;
      const res = this.propertyService.createProperty(this.data, this.primaryImageLocal, this.secondaryImagesLocal);
      res.then(observable => {
        if (observable) {
          observable.subscribe({
            next: (data: any) => {
              console.log(data);
              this.onNoClick();
              this.isLoading = false;
            },
            error: (error: any) => {
              console.log(error);
            }
          })
        }
      
      })
      this.isLoading = false;
    }
  }
}