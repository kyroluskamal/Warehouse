import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkordertypeService {

  constructor(private http:HttpClient) { }

  workOrderType():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/WorkOrderType').pipe(map((res:any) => res.Data));
  }
  deletworkOrderType(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/WorkOrderType/${id}`).pipe(map((res:any) => res.Data));
  }

  updataworkOrderType(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/WorkOrderType/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addWorkOrderType(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/WorkOrderType/Insert', data).pipe(map((res:any) => res.Data));
  }
  
  getWorkById(workId:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/WorkOrderType/${workId}`).pipe(map((res:any) => res.Data));
  }
}
