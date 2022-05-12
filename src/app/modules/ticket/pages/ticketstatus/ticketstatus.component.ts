import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';

@Component({
  selector: 'app-ticketstatus',
  templateUrl: './ticketstatus.component.html',
  styleUrls: ['./ticketstatus.component.css'],
})
export class TicketstatusComponent implements OnInit {
  ticket: any[] = [];
  columns: any[] = ['Id',"StatusNameAr","StatusNameEn"];
  labels: string[] = ['Id', "Status Name Arabic","Status Name English"];
  selectedId: number;
  formType: string;
  isload:boolean = false;
  constructor(
    private TicketService: TicketService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket() {
    this.TicketService.getTickets().subscribe((result: any) => {
      console.log('tickets', result);
      this.ticket = result.TicketStatuses;
      this.isload=true;
      this.ticket.forEach((ele: any) => {
        delete ele['Tasks'];
      });
      this.columns = Object.keys(this.ticket[0]);
      console.log(this.columns);
    });
  }

  deleteRow(id: number) {
    this.selectedId = id;
    this.TicketService.deletTicket(id).subscribe((res) => {
      this.getTicket();
    });
  }

  editRow(id: number) {
    this.formType = 'edit';
    this.selectedId = id;
    this.dialogService.toggleDisplayDialog(true);
    // console.log('edit id : ', id);
    // console.log(this.selectedId);
  }
  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }
}
