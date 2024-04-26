import { Component, OnInit, inject } from '@angular/core';
import { RouteInfo } from '../google-maps/maps-route.model';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';
import { PropertyService } from '../services/property.service';

interface IconUrls {
  [key: string]: string; // Index signature for string keys with string values
}
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:8080/services/property/api/properties/1'
  dateBooking: Date;
  routeInfos: RouteInfo[] = [];
  property: Property = {
    id: 0,
    name: "fill",
    description: "fill",
    address: "fill",
    location: "fill",
    coordinatesLat: 0.0,
    coordinatesLng: 0.0,
    visibility: "PRIVATE",
    state: "AVAILABLE",
    image1: "fill",
    image2: "fill",
    image3: "fill",
    image4: "fill",
    image5: "fill",
    ownerId: 0,
};
  iconUrls: IconUrls = {
    'DRIVING': '../../../../assets/images/driving.svg',
    'TRANSIT': '../../../../assets/images/walking.svg', 
  };

  constructor(private propertyService: PropertyService){
    this.dateBooking = new Date();
  }

  onRouteInfoReady(routeInfos: RouteInfo[]): void {
    this.routeInfos = routeInfos;
    console.log('Received route information:', this.routeInfos);
  }

  fetchData() {
    this.propertyService.getPropertyById(1513).subscribe((response: any) => {
      if (response) {
        this.property = response;
      } else {
        console.error('Property not found');
      }
    }, (error) => {
      console.error('Error fetching property:', error);
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }


}
