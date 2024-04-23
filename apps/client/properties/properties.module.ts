import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component'
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
import { CalendarModule } from 'primeng/calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MatTabsModule } from '@angular/material/tabs'
import { AvatarModule } from 'primeng/avatar'
@NgModule({
  imports: [CommonModule,CalendarModule,MatIconModule,MatBadgeModule, MatTabsModule, AvatarModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent, PropertyDetailsComponent],
  exports: [HomeComponent,PropertyComponent]
})
export class PropertiesModule {}
