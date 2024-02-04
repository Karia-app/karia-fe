import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {AuthService, CoreDataModule} from "../libs/core-data/src/index";
import {AuthGuardService } from "../libs/core-data/src/index";
import {CommonModule} from "@angular/common";
import { UiLoginModule } from 'libs/core-data/src/lib/ui-login/lib/ui-login.module';
import { PropertiesModule } from './client/properties/properties.module'
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    UiLoginModule,
    PropertiesModule,
    CoreDataModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
