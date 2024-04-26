import { Component, OnInit, inject } from '@angular/core';
import { RouteInfo } from '../google-maps/maps-route.model';

import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

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
  apiUrl = 'http://172.27.0.1:8080/services/property/api/properties/1'
  dateBooking: Date;
  routeInfos: RouteInfo[] = [];
  property: Property = {
    id: 1,
    name: "apud",
    description: "ferret wholly",
    address: "general through brr",
    location: "thunderhead",
    coordinatesLat: 14255.19,
    coordinatesLng: 32276.11,
    visibility: "PRIVATE",
    state: "AVAILABLE",
    image1: "unlike idealise",
    image2: "forgo ick behind",
    image3: "beautifully slimy",
    image4: "gleeful",
    image5: "unless subtle",
    ownerId: 1050,
};
  iconUrls: IconUrls = {
    'DRIVING': '../../../../assets/images/driving.svg',
    'TRANSIT': '../../../../assets/images/walking.svg', 
  };

  constructor(){
    this.dateBooking = new Date();
  }

  onRouteInfoReady(routeInfos: RouteInfo[]): void {
    this.routeInfos = routeInfos;
    console.log('Received route information:', this.routeInfos);
  }

  fetchData() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      console.log(response);
      this.property = response.body;
    })
  }

  ngOnInit(): void {
  }


}
