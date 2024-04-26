import { NgModule } from '@angular/core';
import { mapToCanActivate, RouterModule, type Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { AuthGuardService } from '../libs/core-data/src/index'
import { LoginComponent } from 'libs/core-data/src/lib/login/lib/login.component'
import { HomeComponent } from 'apps/client/properties/home/home.component'
import { RegisterComponent } from 'libs/core-data/src/lib/register/lib/register/register.component'
import { ForgotComponent } from 'libs/core-data/src/lib/ui-forgot-password/lib/forgot/forgot.component'
import { PropertyComponent } from 'apps/client/properties/property/property.component'
import { PropertyDetailsComponent } from './client/properties/property-details/property-details.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'home', component: HomeComponent },
  { path: 'property', component:  PropertyComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  {
    path: '**',
    component: AppComponent,
    canActivate: mapToCanActivate([AuthGuardService]),
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
