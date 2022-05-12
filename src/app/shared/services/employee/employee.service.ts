import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Employee').pipe(map((res:any) => res.Data));
  }
  deletEmployee(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Employee/${id}`).pipe(map((res:any) => res.Data));
  }

  updataEmployee(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Employee/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addEmployee(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Employee/Insert', data).pipe(map((res:any) => res.Data));
  }
  getEmployeeById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Employee/${Id}`).pipe(map((res:any) => res.Data));
  }
}
