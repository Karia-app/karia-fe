import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'apps/material.module';
import { CardComponent } from './home/card/card.component';
@NgModule({
  imports: [CommonModule,FontAwesomeModule,MaterialModule],
  declarations: [HomeComponent, CarouselComponent, CardComponent],
  exports: [HomeComponent]
})
export class PropertiesModule {}