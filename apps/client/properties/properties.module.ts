import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CarouselComponent } from './home/carousel/carousel.component';
import { NavbarComponent } from './home/navbar/navbar.component'

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, CarouselComponent, NavbarComponent],
  exports: [HomeComponent]
})
export class PropertiesModule {}
