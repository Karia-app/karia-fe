import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './home/navbar/navbar.component'
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
import { CalendarModule } from 'primeng/calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  imports: [CommonModule,CalendarModule,MatIconModule,MatBadgeModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent],
  exports: [HomeComponent,PropertyComponent]
})
export class PropertiesModule {}
