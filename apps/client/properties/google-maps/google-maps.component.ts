import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';
import { routeStyle } from './routeStyle';
import { RouteInfo } from './maps-route.model';
const propertyIcon = '../../../../assets/images/maps-property-location.svg';
const userLocationIcon = '../../../../assets/images/maps-my-location.svg';
declare const google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements AfterViewInit {

  @Output() routeInfoReady: EventEmitter<RouteInfo[]> = new EventEmitter<RouteInfo[]>();

  map: any;
  directionsService: any;
  googleMapsApiKey: string = environment.googleMapsApiKey;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  async initMap(): Promise<void> {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element with ID "map" not found.');
      return;
    }

    // Initialize Google Map
    this.map = new google.maps.Map(mapElement, {
      center: { lat: 36.8065, lng: 10.1815 }, // Default center coordinates for Tunisia
      zoom: 8
    });

    this.directionsService = new google.maps.DirectionsService();

    try {
      const location = await this.geocode('Tunis, Tunisia');
      this.map.setCenter(location);
      this.addMarker(location, 'Property Location', propertyIcon);

      // Get current user's location and calculate routes
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.addMarker(userLocation, 'Your Location', userLocationIcon);

          const transitInfo = await this.calculateAndDisplayRoute(userLocation, location, 'TRANSIT');
          const drivingInfo = await this.calculateAndDisplayRoute(userLocation, location, 'DRIVING');
          
          this.routeInfoReady.emit([transitInfo, drivingInfo]);
        }, error => {
          console.error('Error getting user location:', error);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  async geocode(address: string): Promise<any> {
    const geocoder = new google.maps.Geocoder();
    try {
      const results = await new Promise<any>((resolve, reject) => {
        geocoder.geocode({ address: address }, (results: any, status: any) => {
          if (status === 'OK' && results && results.length > 0) {
            resolve(results);
          } else {
            reject(`Geocode was not successful for the following reason: ${status}`);
          }
        });
      });
      return results[0].geometry.location;
    } catch (error) {
      console.error('Error geocoding location:', error);
      throw error;
    }
  }

  addMarker(position: any, title: string, iconSvg: string): void {
    new google.maps.Marker({
      position: position,
      map: this.map,
      title: title,
      icon: {
        url: iconSvg,
        scaledSize: new google.maps.Size(32, 32)
      }
    });
  }

  async calculateAndDisplayRoute(start: any, end: any, travelMode: any): Promise<RouteInfo> {
    const request = {
      origin: start,
      destination: end,
      travelMode: travelMode
    };

    return new Promise<RouteInfo>((resolve, reject) => {
      this.directionsService.route(request, (result: any, status: any) => {
        if (status == 'OK') {
          const directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true, // Suppress default markers
            polylineOptions: routeStyle
          });
          directionsRenderer.setDirections(result);

          const route = result.routes[0];
          const routeLeg = route.legs[0];
          const distance = routeLeg.distance.text;
          const duration = routeLeg.duration.text;

          const routeInfo: RouteInfo = {
            travelMode: travelMode,
            distance: distance,
            duration: duration
          };

          resolve(routeInfo);
        } else {
          console.error('Failed to display route:', status);
          reject(status);
        }
      });
    });
  }

}
