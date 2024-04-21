import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
<<<<<<< HEAD
import { CarouselComponent } from './home/carousel/carousel.component';
import { NavbarComponent } from './home/navbar/navbar.component'

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, CarouselComponent, NavbarComponent],
  exports: [HomeComponent]
=======
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
import { CalendarModule } from 'primeng/calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  imports: [CommonModule,CalendarModule,MatIconModule,MatBadgeModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent],
  exports: [HomeComponent,PropertyComponent]
>>>>>>> origin/master
})
export class PropertiesModule {}
