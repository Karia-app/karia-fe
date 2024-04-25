import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
import { CalendarModule } from 'primeng/calendar';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MatTabsModule } from '@angular/material/tabs'
import { AvatarModule } from 'primeng/avatar';
import { GoogleMapsComponent } from './google-maps/google-maps.component'
import { MaterialModule } from 'apps/material.module';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component'
import { MatBadgeModule } from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  imports: [CommonModule,CalendarModule,MatIconModule,MatBadgeModule, MatTabsModule, AvatarModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent, PropertyDetailsComponent, GoogleMapsComponent],
  exports: [HomeComponent,PropertyComponent, GoogleMapsComponent]
  imports: [CommonModule,CalendarModule, MatTabsModule, AvatarModule, MaterialModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent, PropertyDetailsComponent],
  exports: [HomeComponent,PropertyComponent]
})
export class PropertiesModule {}
