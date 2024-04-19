import { NgModule } from '@angular/core'
import { mapToCanActivate, RouterModule, type Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { AuthGuardService } from '../libs/core-data/src/index'
import { LoginComponent } from 'libs/core-data/src/lib/ui-login/lib/login/login.component'
import { HomeComponent } from 'apps/client/properties/home/home.component'
import { PropertyComponent } from 'apps/client/properties/property/property.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'property', component:  PropertyComponent},
  { path: '**', component: AppComponent, canActivate: mapToCanActivate([AuthGuardService]) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
