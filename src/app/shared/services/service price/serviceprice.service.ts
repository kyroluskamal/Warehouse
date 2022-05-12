import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicepriceService {

  constructor(private http:HttpClient) { }

  servicePriceList():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/ServicePriceList').pipe(map((res:any) => res.Data));
  }
  deletservicePriceList(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/ServicePriceList/${id}`).pipe(map((res:any) => res.Data));
  }
  getservicePriceListById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/ServicePriceList/${id}`).pipe(map((res:any) => res.Data));
  }
  updataservicePriceList(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/ServicePriceList/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addServicePrice(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/ServicePriceList/Insert', data).pipe(map((res:any) => res.Data));
  }
}
