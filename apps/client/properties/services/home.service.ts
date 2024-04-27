import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNjcyNzY0MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzE0MTM1NjQwfQ.uc2HQUicdJ-QGrRd-IGOz5U58etqXm-wtFqtFI13mxaut8tIUeB-4qiHOqJpyRQMwbgbqi7Cs3ZVCqmfrsb16w',
//   }),
// };
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.gettoken()}`,
    }),
  };
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:8080';
  getproperties(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/services/property/api/properties`,
      this.httpOptions
    );
  }
  getproduct(id: Number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/services/property/api/${id}`,
      this.httpOptions
    );
  }
  gettoken() {
    const auth = localStorage.getItem('token');
    const token = auth ? JSON.parse(auth).id_token : null;
    return token;
  }
}
