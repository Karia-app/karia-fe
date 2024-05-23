import { Component, OnInit,Inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog'
import { Property } from '../models/property';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
import { PropertyService } from '../services/property.service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property : Property = {
    id:0,
    name: '',
    description: '',
    address: '',
    location: '',
    coordinatesLat: 0,
    coordinatesLng: 0,
    visibility: 'PUBLIC',
    state: 'AVAILABLE',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    ownerId : 1050,
  }
  properties:Property[]=[]
  constructor(public dialog : MatDialog,private propertyService: PropertyService){}
  selected: Date | null = null;
  openDialog():void {
    const dialogRef = this.dialog.open(PropertyDialogComponent, {
      data: {
        name: this.property.name,
        description: this.property.description,
        address: this.property.address,
        location: this.property.location,
        coordinatesLat: this.property.coordinatesLat,
        coordinatesLng: this.property.coordinatesLng,
        visibility: this.property.visibility,
        state: this.property.state,
        image1: this.property.image1,
        image2: this.property.image2,
        image3: this.property.image3,
        image4: this.property.image4,
        image5: this.property.image5,
        ownerId: this.property.ownerId
      }
      
    }
  )
  this.retrieveProperties();
  }
  ngOnInit() {
    this.retrieveProperties();
  }
  retrieveProperties(): void {
    this.propertyService.getProperties()
      .subscribe({
        next: (data) => {
          this.properties = data;
        },
        error: (e) => {console.error(e)
        },
       complete : () => {
        console.log(this.properties)
      }
      
    });
  }
}