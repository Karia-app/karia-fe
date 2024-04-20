import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { ForgotComponent } from './forgot/forgot.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
export const uiLoginRoutes: Route[] = [
    {
    }
];
@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
  ]
})
export class UiForgotModule { }
