import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getTeamById(Id:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Team/${Id}`).pipe(map((res:any) => res.Data))
  }
  getTeam():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Team').pipe(map((res:any) => res.Data))
  }
  deleteTeam(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Team/${id}`).pipe(map((res:any) => res.Data))
  }
  editTeam(id:number,data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Team/${id}`,data).pipe(map((res:any) => res.Data))
  }

  addTeam(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Team/Insert', data).pipe(map((res:any) => res.Data))
  }
}
