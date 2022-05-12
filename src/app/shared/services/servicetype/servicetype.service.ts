import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicetypeService {

  constructor(private http:HttpClient) { }

  serviceType():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/ServiceType').pipe(map((res:any) => res.Data));
  }
  serviceTypeById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/ServiceType/${id}`).pipe(map((res:any) => res.Data));
  }
  deletserviceType(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/ServiceType/${id}`).pipe(map((res:any) => res.Data));
  }

  updataserviceType(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/ServiceType/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addServiceType(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/ServiceType/Insert', data).pipe(map((res:any) => res.Data));
  }
}
