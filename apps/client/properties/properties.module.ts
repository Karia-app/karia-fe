import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CarouselComponent } from './home/carousel/carousel.component'

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, CarouselComponent],
  exports: [HomeComponent]
})
export class PropertiesModule {}
