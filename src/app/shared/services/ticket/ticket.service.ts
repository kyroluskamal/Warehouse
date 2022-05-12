import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  getTickets():Observable<any>
  {
    return this.http.get('http://apifm.alfoadia.com.sa/api/TicketStatus').pipe(map((res:any) => res.Data));
  }
  deletTicket(id:number):Observable<any>
  {
    return this.http.delete(`http://apifm.alfoadia.com.sa/api/TicketStatus/${id}`).pipe(map((res:any) => res.Data));
  }

  updataTicket(id:number, data:any):Observable<any>
  {
    return this.http.put(`http://apifm.alfoadia.com.sa/api/TicketStatus/${id}`, data).pipe(map((res:any) => res.Data));
  }

  addTicket(data:any):Observable<any>
  {
    return this.http.post('http://apifm.alfoadia.com.sa/api/TicketStatus/Insert', data).pipe(map((res:any) => res.Data));
  }
  getTicketById(ticketId:number){
    return this.http.get(`http://apifm.alfoadia.com.sa/api/TicketStatus/${ticketId}`).pipe(map((res:any) => res.Data));
  }

  // ticketStatus():Observable<any>
  // {
  //   return this.http.get('http://apifm.alfoadia.com.sa/api/TicketStatus').pipe(map((res:any) => res.Data));
  // }
  // deletTicketStatus(id:number):Observable<any>
  // {
  //   return this.http.delete(`http://apifm.alfoadia.com.sa/api/TicketStatus/${id}`).pipe(map((res:any) => res.Data));
  // }

  // updataticketstatus(id:number, data:any):Observable<any>
  // {
  //   return this.http.put(`http://apifm.alfoadia.com.sa/api/TicketStatus/${id}`, data).pipe(map((res:any) => res.Data));
  // }

  // addTicket(data:any):Observable<any>
  // {
  //   return this.http.post('http://apifm.alfoadia.com.sa/api/Ticket/Insert', data).pipe(map((res:any) => res.Data));
  // }
  // getTicketById(ticketId:number){
  //   return this.http.get(`http://apifm.alfoadia.com.sa/api/Ticket/${ticketId}`).pipe(map((res:any) => res.Data));
  // }
}
