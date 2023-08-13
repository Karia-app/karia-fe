import { NgModule } from '@angular/core';
import {mapToCanActivate, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./shared/guards/auth/auth-guard";
const routes: Routes = [
  {path : "login", component: LoginComponent},
  {path : "home", component : HomeComponent, canActivate: mapToCanActivate([AuthGuard])},
  {path : "**", component: AppComponent, canActivate: mapToCanActivate([AuthGuard])}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
