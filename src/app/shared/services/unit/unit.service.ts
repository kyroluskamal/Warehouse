import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http:HttpClient) { }

  getUnit():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/UnitMeasure').pipe(map((res:any) => res.Data));
  }
  deletUnit(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/UnitMeasure/${id}`).pipe(map((res:any) => res.Data));
  }

  updataUnit(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/UnitMeasure/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addUnit(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/UnitMeasure/Insert', data).pipe(map((res:any) => res.Data));
  }
  getUnitById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/UnitMeasure/${Id}`).pipe(map((res:any) => res.Data));
  }
}
