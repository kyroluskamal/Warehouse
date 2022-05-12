import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  addUser(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/User/Insert',data).pipe(map((res:any) => res.Data))
  }

  getAllUser():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/User').pipe(map((res:any) => res.Data))
  }

  getAllUserById(id:number):Observable<any>
  {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/User/${id}`).pipe(map((res:any) => res.Data))
  }
  deleteUser(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/User/${id}`)
  }

  editUser(id:number , data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/User/${id}`, data)
  }

  
  blockUser(id:number , isBlock:boolean):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/User/BlockUserAccount/${id}`,{}, {params:{Block:isBlock}})
  }

  paymentUser(id:number , payment:number):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/User/ConfirmPayment/${id}`,{}, {params:{Confirm:payment}})
  }
}
