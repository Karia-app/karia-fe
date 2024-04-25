import { Component } from '@angular/core';
import { RouteInfo } from '../google-maps/maps-route.model';
interface IconUrls {
  [key: string]: string; // Index signature for string keys with string values
}
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  dateBooking: Date;
  routeInfos: RouteInfo[] = [];
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
}
