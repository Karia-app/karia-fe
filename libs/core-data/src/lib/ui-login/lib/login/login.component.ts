import { Component } from '@angular/core';
import { UserAuth } from '../../../../index';
import { AuthService } from '../../../../index';
import { RouterLink } from '@angular/router';
RouterLink
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user : UserAuth = {
    username : '',
    password : ''
  }

  constructor(private authService: AuthService) {}
  login(userAuth : UserAuth){
      if (userAuth.username.length > 0 && userAuth.password.length > 0)
      this.authService.login(userAuth);
  }
}
