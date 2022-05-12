import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  addDepartment(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Department/Insert',data).pipe(map((res:any) => res.Data))
  }

  getDepartment():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Department').pipe(map((res:any) => res.Data))
  }

  deleteDepartment(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Department/${id}`).pipe(map((res:any) => res.Data))
  }

  editDepartment(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Department/${id}`,data).pipe(map((res:any) => res.Data))
  }
  getDepartmentById(id:any)
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Department/${id}`).pipe(map((res:any) => res.Data))
  }
}
