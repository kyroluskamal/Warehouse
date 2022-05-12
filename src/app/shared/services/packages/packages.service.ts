import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http:HttpClient) { }

  getPackagesById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Package/${Id}`).pipe(map((res:any) => res.Data))
  }
  getPackages():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Package').pipe(map((res:any) => res.Data))
  }
  deletePackages(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Package/${id}`).pipe(map((res:any) => res.Data))
  }
  editPackages(id:number,data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Package/${id}`,data).pipe(map((res:any) => res.Data))
  }

  addPackages(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Package/Insert', data).pipe(map((res:any) => res.Data))
  }
}
