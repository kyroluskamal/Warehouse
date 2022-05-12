import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserById(userId: number): Observable<any> {
    return this.http.get(`http://apifm.alfoadia.com.sa/api/User/${userId}`).pipe(map((res:any) => res.Data))
  }
  updateUser(userId:number,data:any){
    return this.http.put(`http://apifm.alfoadia.com.sa/api/User/${userId}`,data).pipe(map((res:any) => res.Data))
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/User/${userId}`).pipe(map((res:any) => res.Data))
  }
}
