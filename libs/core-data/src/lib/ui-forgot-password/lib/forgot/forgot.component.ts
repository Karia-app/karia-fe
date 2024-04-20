import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
  
export class ForgotComponent {
  data = {
    phoneNumber: '',
    code: '',
    isTouched: false,
    password: '',
    
  }
  step = 0;
  constructor(private authService: AuthService,private router : Router) {}
  sendReset() {
    this.data.isTouched = false;
    this.authService.sendReset(this.data.phoneNumber).subscribe(
      (data: any) => {
        if (data.status == 200) {
          this.step = 1;
        
        }
      }
    );
  }
  validateCode() {
    this.authService.validateCode(this.data.code, this.data.phoneNumber).subscribe(
      (data: any) => {
        if (data.status == 200) {
          this.step = 2;
        
        }
      }
    );
  }
    resetPassword() {
    this.authService.resetPassword(this.data.password, this.data.phoneNumber).subscribe(
      (data: any) => {
        this.data.password = '';
        if (data.status == 200) {
        }
      }
    );
  }
}
