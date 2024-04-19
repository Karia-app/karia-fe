import { Component } from '@angular/core';
import { UserRegister } from '../../../auth/user-register';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : UserRegister = {
    firstName: '',
    lastName: '',
    avatar: null,
    password: '',
    login: '',
    email:'',
  }
  constructor(private authService : AuthService) {}
  register() {
    if (this.user.firstName && this.user.lastName && this.user.login && this.user.email && this.user.password) {
      this.authService.register(this.user);
    }
  }
    pngInputChange(fileInputEvent: any) {
      this.user.avatar = fileInputEvent.target.files[0];
  }
}
