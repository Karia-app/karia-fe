import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
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
  @Output() propertyDataUpdated: EventEmitter<any> = new EventEmitter<any>();

  
  httpClient = inject(HttpClient);
  dateBooking: Date;
  propertyEmitter: any;
  routeInfos: RouteInfo[] = [];
  property: any;
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
    this.propertyService.getPropertyById(1517).subscribe((response: any) => {
      if (response) {
        this.property = response;
        this.propertyDataUpdated.emit(this.property);
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
