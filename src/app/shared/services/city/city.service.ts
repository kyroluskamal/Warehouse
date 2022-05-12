import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  getCityById(cityId:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/City/${cityId}`).pipe(map((res:any) => res.Data))
  }
  getCities():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/City').pipe(map((res:any) => res.Data))
  }
  deletecity(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/City/${id}`).pipe(map((res:any) => res.Data))
  }
  editcity(id:number,data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/City/${id}`,data).pipe(map((res:any) => res.Data))
  }

  addCity(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/City/Insert', data).pipe(map((res:any) => res.Data))
  }


}
