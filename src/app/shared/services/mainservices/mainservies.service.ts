import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainserviesService {

  constructor(private http:HttpClient) { }

  addNewServices(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/MainService/Insert',data).pipe(map((res:any) => res.Data))
  }

  getAllservices():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/MainService').pipe(map((res:any) => res.Data))
  }

  getAllservicesById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/MainService/${id}`).pipe(map((res:any) => res.Data))
  }
  deleteServices(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/MainService/${id}`)
  }

  editServices(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/MainService/${id}`,data)
  }
}
