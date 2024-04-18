import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserAuth } from './user-auth'
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = {
    token : "",
    email : ""
  }
  endpoint : string = "auth/authenticate"
  private isAuthenticated = new BehaviorSubject(this.getIsAuthenticated() || false);
  isAuthenticated$ = this.isAuthenticated.asObservable();
  constructor(private http : HttpClient,private router : Router) { }
  login(userAuth : UserAuth){
    return this.http.post(this.getUrl(),userAuth,{observe : 'response'}).subscribe((response) => 
      {
        if (response.status == 200){
          const data :any = response.body;
          this.setIsAuthenticated(data.token,userAuth.email);
          this.router.navigateByUrl('/home');
        }
      }
    )
  }
  logout(){
    this.setIsAuthenticated('','');
  }
  getIsAuthenticated() {
    const JWT_TOKEN = "token";
    const token = localStorage.getItem(JWT_TOKEN);
    if (token){
       const parsedToken = JSON.parse(token);
       if (parsedToken?.token)
          return parsedToken.token;
    }
    return undefined;

  }
  setIsAuthenticated(jwt : string,userEmail : string){
    if (jwt){
      this.token.email = userEmail;
      this.token.token = jwt;
      localStorage.setItem("token",JSON.stringify(this.token));
      this.isAuthenticated.next(jwt !== '');
    }
  }
  getUrl(){
    return `${environment.API_URL}/api/${this.endpoint}`
  }
}
