import { NgModule } from '@angular/core'
import { mapToCanActivate, RouterModule, type Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { AuthGuardService } from '../libs/core-data/src/index'
import { LoginComponent } from 'libs/core-data/src/lib/ui-login/lib/login/login.component'
import { HomeComponent } from 'apps/client/properties/home/home.component'
import { RegisterComponent } from 'libs/core-data/src/lib/register/lib/register/register.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component:RegisterComponent},
  { path: '**', component: AppComponent, canActivate: mapToCanActivate([AuthGuardService]) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
