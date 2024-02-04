import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { propertyReducer } from './properties/properties.reducer';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ properties : propertyReducer })
  ]
})
export class StateModule { }
