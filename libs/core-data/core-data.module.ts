import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './src/lib/auth/auth.service';
import { AuthGuardService } from './src/lib/auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './src/lib/state/state.module';
import { ForgotComponent } from './src/lib/ui-forgot-password/lib/forgot/forgot.component';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
  declarations: [

  ]
})
export class CoreDataModule { }
