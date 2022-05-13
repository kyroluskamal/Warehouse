import { Component, Input, OnInit } from '@angular/core';
import { TickettwoService } from 'src/app/shared/services/tickettwo/tickettwo.service';
import { ClientService } from 'src/app/shared/services/client/client.service';
@Component({
  selector: 'app-ticketTwoDetails',
  templateUrl: './ticket-two-details.component.html',
  styleUrls: ['./ticket-two-details.component.scss'],
})
export class TicketTwoDetailsComponent implements OnInit
{
  _ticketId: any;
  selectedTicket: any;
  selectedUser: any;
  selectedTicketStatus: any;
  @Input() set ticketId(ticketId: number)
  {
    this._ticketId = ticketId;
    this.getTicketInfo(ticketId);
  }
  constructor(private ticketService: TickettwoService, private ClientService: ClientService) { }

  ngOnInit(): void
  {
  }
  getTicketInfo(ticketId: number)
  {
    this.selectedTicket = null;
    this.selectedUser = null;
    console.log('ticketId', ticketId);
    this.ticketService.getTicketById(ticketId).subscribe(
      (result: any) =>
      {
        this.selectedTicket = result.Ticketstatus.Tickets.filter(x => x.Id == ticketId)[0];
        this.selectedTicketStatus = result.Ticketstatus;
        this.getUserDetailes(this.selectedTicket.UserId);
      }
    );
  }
  getUserDetailes(UserId: number)
  {
    this.ClientService.getAllUserById(UserId).subscribe(res =>
    {
      this.selectedUser = res.Users;
    });
  }
}
