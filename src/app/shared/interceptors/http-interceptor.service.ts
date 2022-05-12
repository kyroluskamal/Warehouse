import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('mytoken');
    const authRquest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    return next.handle(authRquest).pipe(
      tap(
        (event) => {
          console.log('event',event)
        },
        (error) => {
          console.log('error',error)
          if(error.status == 401){
            localStorage.removeItem('mytoken')
          }
        }
      )
    );
  }
}
