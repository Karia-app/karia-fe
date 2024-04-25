import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { CarouselComponent } from './home/carousel/carousel.component'
import { PropertyComponent } from './property/property.component'
import { CalendarModule } from 'primeng/calendar';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MatTabsModule } from '@angular/material/tabs'
import { AvatarModule } from 'primeng/avatar'
import { MaterialModule } from 'apps/material.module';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component'
@NgModule({
  imports: [CommonModule,CalendarModule, MatTabsModule, AvatarModule, MaterialModule],
  declarations: [HomeComponent, CarouselComponent,PropertyComponent, PropertyDetailsComponent],
  exports: [HomeComponent,PropertyComponent]
})
export class PropertiesModule {}
