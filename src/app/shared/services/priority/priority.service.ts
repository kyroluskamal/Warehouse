import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http:HttpClient) { }
  addpriority(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Priority/Insert',data).pipe(map((res:any) => res.Data))
  }

  getAllPriority():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Priority').pipe(map((res:any) => res.Data))
  }

  getAllPriorityById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Priority/${id}`).pipe(map((res:any) => res.Data))
  }
  deletePriority(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Priority/${id}`)
  }

  editPriority(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Priority/${id}`, data)
  }
}
