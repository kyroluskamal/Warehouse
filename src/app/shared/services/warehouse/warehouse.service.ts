import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getWarehouse():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/WareHouse').pipe(map((res:any) => res.Data));
  }
  deletWarehouse(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/WareHouse/${id}`).pipe(map((res:any) => res.Data));
  }

  updataWarehouse(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/WareHouse/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addWarehouse(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/WareHouse/Insert', data).pipe(map((res:any) => res.Data));
  }
  getWarehouseById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/WareHouse/${Id}`).pipe(map((res:any) => res.Data));
  }
}
