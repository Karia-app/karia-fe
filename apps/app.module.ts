import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http'
import { AuthService, AuthGuardService } from '../libs/core-data/src/index'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CommonModule } from '@angular/common'
import { UiLoginModule } from 'libs/core-data/src/lib/ui-login/lib/ui-login.module'
import { UiRegisterModule } from 'libs/core-data/src/lib/register/lib/ui-register.module'
import { PropertiesModule } from './client/properties/properties.module'
import { environment } from 'environments/environment'
import { UiForgotModule } from 'libs/core-data/src/lib/ui-forgot-password/lib/ui-forgot.module'
@NgModule({
  declarations: [
    AppComponent

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
    UiRegisterModule,
    PropertiesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
