import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http:HttpClient) { }

  addProfession(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/Profession/Insert',data).pipe(map((res:any) => res.Data))
  }

  getAllProfession():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/Profession').pipe(map((res:any) => res.Data))
  }

  getAllProfessionById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/Profession/${id}`).pipe(map((res:any) => res.Data))
  }
  deleteProfession(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/Profession/${id}`)
  }

  editProfession(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/Profession/${id}`, data)
  }
}
