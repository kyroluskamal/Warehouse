import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate():boolean|Observable<boolean>{
    var token = localStorage.getItem('mytoken');
    if(token)
    {
      return true
    }
    this.router.navigateByUrl("/login");
    return false;
   }
}
