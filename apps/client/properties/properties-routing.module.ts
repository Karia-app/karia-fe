import { NgModule } from '@angular/core'
import { RouterModule, type Routes, mapToCanActivate } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthGuardService } from '../../../libs/core-data/src/index'
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: mapToCanActivate([AuthGuardService]) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
