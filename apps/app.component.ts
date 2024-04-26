import { Component } from '@angular/core'
import { environment } from '../libs/environments/environment'
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mapsKey: string = environment.googleMapsApiKey;
  title = 'karia'
  constructor(private router: Router) { }

  showNavbar() {
    return this.router.url != '/' && this.router.url != '/register' && this.router.url != '/forgot'  
  }


}

