import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  getVendor():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Vendor').pipe(map((res:any) => res.Data));
  }
  deletVendor(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Vendor/${id}`).pipe(map((res:any) => res.Data));
  }

  updataVendor(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Vendor/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addVendor(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Vendor/Insert', data).pipe(map((res:any) => res.Data));
  }
  getVendorById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Vendor/${Id}`).pipe(map((res:any) => res.Data));
  }
}
