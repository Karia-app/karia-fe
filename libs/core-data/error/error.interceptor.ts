import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  // FILE TO INTERCEPT HTTP ERROR REQUESTS AND DROP THEM INTO TOAST.
export class ErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler):  any //Observable<HttpEvent<any>> 
    {

    }
}