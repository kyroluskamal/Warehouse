import { Component, OnInit } from '@angular/core';
import { TickettwoService } from 'src/app/shared/services/tickettwo/tickettwo.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
TicketService;
@Component({
  selector: 'app-tickettwo',
  templateUrl: './tickettwo.component.html',
  styleUrls: ['./tickettwo.component.scss']
})
export class TickettwoComponent implements OnInit
{
  tickets: any[] = [];
  columns: any[] = ['Id', "TicketNumber", "UserId", "DayDate", "Time", "TicketStatusId"];
  labels: string[] = ['Id', "Ticket Number", "User", "Day Date", "Time", "Ticket Status"];
  selectedId: number;
  formType: string;
  isload: boolean = false;
  arr: any[];
  user: any;
  Ticket: any;
  constructor(private TickettwoService: TickettwoService, private DialogService: DialogService, private ClientService: ClientService,
    private TicketService: TicketService) { }


  ngOnInit(): void
  {
    this.getUser();
  }

  getTicket()
  {
    this.TickettwoService.getTickets().subscribe((result: any) =>
    {
      console.log('result', result);
      this.tickets = result.Ticketstatus;
      this.isload = true;
      this.arr = [];

      for (let x = 0; x < this.tickets.length; x++)
      {
        let tickets = this.tickets[x].Tickets;
        for (let y = 0; y < tickets.length; y++)
        {
          let obj = {
            Id: tickets[y].Id,
            TicketNumber: tickets[y].TicketNumber,
            UserId: this.filterUser(tickets[y].UserId),
            DayDate: tickets[y].DayDate,
            Time: tickets[y].Time,
            TicketStatusId: this.filterTicket(tickets[y].TicketStatusId),
          };
          this.arr.push(obj);
        }
      }
      this.tickets = this.arr;
    });

  }

  deleteRow(id: number)
  {
    this.selectedId = id;
    this.TickettwoService.deletTicket(id).subscribe((res) =>
    {
      this.getTicket();
    });
  }

  editRow(id: number)
  {
    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    // console.log('edit id : ', id);
    // console.log(this.selectedId);
  }
  openAddDialog()
  {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }

  // get user

  getUser()
  {
    this.ClientService.getAllUser().subscribe((result: any) =>
    {
      console.log(result);
      this.user = result.Users;
      this.getTicketStatus();
    });
  }

  filterUser(id: any)
  {
    let userName = _.find(this.user, function (o) { return o.Id == id; });
    return userName?.UserName;
  }

  // get ticket

  getTicketStatus()
  {
    this.TicketService.getTickets().subscribe((result: any) =>
    {
      console.log(result);
      this.Ticket = result.TicketStatuses;
      this.getTicket();
    });
  }

  filterTicket(id: any)
  {
    let ticketName = _.find(this.Ticket, function (o) { return o.Id == id; });
    return ticketName?.StatusNameEn;
  }
  ChangeStatus(rowId: number)
  {
    console.log(rowId);
  }
}
