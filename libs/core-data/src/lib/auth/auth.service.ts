import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize } from 'rxjs';
import { UserAuth } from './user-auth'
import { environment } from '../../../../../environments/environment'
import { UserRegister } from './user-register';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = {
    token : "",
    email : ""
  }
  endpoint: string = "authenticate"
  registerEndpoint: string = "register"
  private isAuthenticated = new BehaviorSubject(this.getIsAuthenticated() || false);
  isAuthenticated$ = this.isAuthenticated.asObservable();
  constructor(private http: HttpClient, private router: Router, private storage: AngularFireStorage) { }
  saveImage(f: File,username: String): Promise<string> {
  return new Promise((resolve, reject) => {
    const file = f;
    const filePath = `images/${username}`
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          // Resolve the Promise with the download URL
          resolve(downloadURL);
        }, error => {
          // Reject the Promise if there's an error getting the download URL
          reject(error);
        });
      })
    ).subscribe();
  });
}
  login(userAuth : UserAuth){
    return this.http.post(this.getLoginUrl(),userAuth,{observe : 'response'}).subscribe((response) => 
    {
        if (response.status == 200){
          const data :any = response.body;
          this.setIsAuthenticated(data.id_token,userAuth.username);
          this.router.navigateByUrl('/home');
        }
      }
    )
  }
  async register(userRegister: UserRegister) {
    let imageURL: String = '';
    if (userRegister.avatar) {
      imageURL = await this.saveImage(userRegister.avatar, userRegister.login);
    }
    return this.http.post(this.getRegisterUrl(), { ...userRegister, imageUrl: imageURL }, { observe: 'response' }).subscribe((response) => 
    {
      if (response.status == 201) {
        const data: any = response.body;
        this.router.navigateByUrl('/');
      }
    })
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

  getLoginUrl(){
    return `${environment.API_URL}/api/${this.endpoint}`
  }
  getRegisterUrl() {
    return `${environment.API_URL}/api/${this.registerEndpoint}`
  }
}
