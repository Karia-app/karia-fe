import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { mapToCanActivate } from '@angular/router';
import { AuthGuardService } from "../../../libs/core-data/src/index";
const routes: Routes = [
    {path : '',  component : HomeComponent,canActivate : mapToCanActivate([AuthGuardService])}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
