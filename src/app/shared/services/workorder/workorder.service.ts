import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkorderService {

  constructor(private http:HttpClient) { }

  workOrderStatus():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/WOStatus').pipe(map((res:any) => res.Data));
  }
  deletworkOrderStatus(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/WOStatus/${id}`).pipe(map((res:any) => res.Data));
  }

  updataworkOrderStatus(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/WOStatus/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addWorkOrderStatus(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/WOStatus/Insert', data).pipe(map((res:any) => res.Data));
  }
  
  getWorkById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/WOStatus/${Id}`).pipe(map((res:any) => res.Data));
  }
}
