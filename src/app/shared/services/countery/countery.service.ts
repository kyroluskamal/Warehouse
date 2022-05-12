import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CounteryService {

  constructor(private http:HttpClient) { }

  addNewCountery(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Country/Insert', data).pipe(map((res:any) => res.Data))
  }

  getAllCountery():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Country').pipe(map((res:any) => res.Data))
  }

  deleteCountery(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Country/${id}`).pipe(map((res:any) => res.Data))
  }

  editCountery(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Country/${id}`,data).pipe(map((res:any) => res.Data))
  }
  getCountryById(id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Country/${id}`).pipe(map((res:any) => res.Data))
  }
}
