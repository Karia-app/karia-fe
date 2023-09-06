import { Component } from '@angular/core';
import { UserAuth } from '../../../../index';
import { AuthService } from '../../../../index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user : UserAuth = {
    email : '',
    password : ''
  }

  constructor(private authService: AuthService) {}
  login(userAuth : UserAuth){
      if (userAuth.email.length > 0 && userAuth.password.length > 0)
      this.authService.login(userAuth);
  }
}
