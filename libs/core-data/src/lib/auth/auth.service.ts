import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { UserAuth } from './user-auth'
import { UserRegister } from './user-register';
import { environment } from './../../../../environments/environment';
import { FirebaseService } from '../firebase/services/firebase.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = "authenticate"
  registerEndpoint: string = "register"
  forgotPasswordEndpoint: string = "forgot-password"
  validateCodeEndpoint: string = "validate-code"
  resetPasswordEndpoint: string = "reset-password"
  private isAuthenticated = new BehaviorSubject(this.getIsAuthenticated() || false);
  isAuthenticated$ = this.isAuthenticated.asObservable();
  constructor(private http: HttpClient, private router: Router, private firebaseService : FirebaseService) { }

  login(userAuth : UserAuth){
    return this.http.post(this.getLoginUrl(),userAuth,{observe : 'response'}).subscribe((response) => 
    {
        if (response.status == 200){
          const data :any = response.body;
          this.setIsAuthenticated(data,userAuth.username);
          this.router.navigateByUrl('/home');
        }
      }
    )
  }
  async register(userRegister: UserRegister) {
    let imageURL: String = '';
    if (userRegister.avatar) {
      imageURL = await this.firebaseService.saveImage(userRegister.avatar, `images/${userRegister.login}`);
    }
    return this.http.post(this.getRegisterUrl(), { ...userRegister, imageUrl: imageURL }, { observe: 'response' }).subscribe((response) => 
    {
      if (response.status == 201) {
        const data: any = response.body;
        this.router.navigateByUrl('/');
      }
    })
  }
  sendReset(phoneNumber : string) {
    return this.http.post(this.getForgotPasswordUrl(), { phoneNumber }, { observe: 'response' }).pipe(
      catchError(error => {
        // Handle errors here
        return throwError(() => error);
      }))
  }
  validateCode(code : string, phoneNumber: string) {
    return this.http.post(this.getValidateCodeUrl(), { code,phoneNumber }).pipe(
      catchError(error => {
        // Handle errors here
        return throwError(() => error);
      }))
  }
   resetPassword(password: string,phoneNumber : string) {
    return this.http.post(this.getResetPasswordUrl(), { password,phoneNumber }).pipe(
      catchError(error => {
        // Handle errors here
        return throwError(() => error);
      })
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
  setIsAuthenticated(payload : any,userEmail : string){
    if (payload){
      localStorage.setItem("token", JSON.stringify({ ...payload, email: userEmail }));
      this.isAuthenticated.next(payload !== '');
    }
  }

  getLoginUrl() : string{
    return `${environment.API_URL}/api/${this.endpoint}`
  }
  getRegisterUrl() : string{
    return `${environment.API_URL}/api/${this.registerEndpoint}`
  }
  getForgotPasswordUrl() : string{
    return `${environment.API_URL}/api/${this.forgotPasswordEndpoint}` 
  }
  getValidateCodeUrl() : string{
    return `${environment.API_URL}/api/${this.validateCodeEndpoint}` 
  }
  getResetPasswordUrl() : string{
    return `${environment.API_URL}/api/${this.resetPasswordEndpoint}` 
  }
}
