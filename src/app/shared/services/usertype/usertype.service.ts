import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor(private http:HttpClient) { }

  getUser():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/UserType').pipe(map((res:any) => res.Data));
  }
  deletUser(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/UserType/${id}`).pipe(map((res:any) => res.Data));
  }

  updataUser(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/UserType/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addUser(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/UserType/Insert', data).pipe(map((res:any) => res.Data));
  }
  getUserById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/UserType/${Id}`).pipe(map((res:any) => res.Data));
  }
}
