import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent],
  exports: [HomeComponent,PropertyComponent]
})
export class PropertiesModule {}
