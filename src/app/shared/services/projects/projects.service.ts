import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getprojectsById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Project/${Id}`).pipe(map((res:any) => res.Data))
  }

  getprojects():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Project').pipe(map((res:any) => res.Data))
  }

  deleteprojects(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Project/${id}`).pipe(map((res:any) => res.Data))
  }
  
  editprojects(id:number,data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Project/${id}`,data).pipe(map((res:any) => res.Data))
  }

  addprojects(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Project/Insert', data).pipe(map((res:any) => res.Data))
  }
}
