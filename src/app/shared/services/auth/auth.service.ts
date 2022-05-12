import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  register(obj:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Auth/register', obj)
  }


  login(obj:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Auth/login', obj)
  }

  public changePassword(id:number,newPassword:{NewPassword:string}):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/User/ChangePasswordByUserId/${id}`, newPassword)
  }

}
