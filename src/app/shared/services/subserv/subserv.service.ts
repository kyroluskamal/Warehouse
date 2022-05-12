import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubservService {

  constructor(private http:HttpClient) { }
  
  allSubService():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/SubService').pipe(map((res:any) => res.Data));
  }
  subServiceById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/SubService/${id}`).pipe(map((res:any) => res.Data));
  }
  deletSubservice(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/SubService/${id}`).pipe(map((res:any) => res.Data));
  }

  updatSubService(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/SubService/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addSubService(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/SubService/Insert', data).pipe(map((res:any) => res.Data));
  }
}
