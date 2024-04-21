import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { RegisterComponent } from './register/register.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
export const uiLoginRoutes: Route[] = [
    {
    }
];

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule,MatInputModule,MatGridListModule,FormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class UiRegisterModule {}