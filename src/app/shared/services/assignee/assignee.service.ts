import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssigneeService {

  constructor(private http:HttpClient) { }

  getAssigneeById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Assignee/${Id}`).pipe(map((res:any) => res.Data))
  }
  getAssignee():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Assignee').pipe(map((res:any) => res.Data))
  }
  deleteAssignee(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Assignee/${id}`).pipe(map((res:any) => res.Data))
  }
  editAssignee(id:number,data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Assignee/${id}`,data).pipe(map((res:any) => res.Data))
  }

  addAssignee(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Assignee/Insert', data).pipe(map((res:any) => res.Data))
  }
  
}
