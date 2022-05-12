import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.scss'],
})
export class EditticketComponent implements OnInit {
  @Input() ticketId:number;
  @Output() onEditTicket = new EventEmitter()
  editTicket: FormGroup;
  constructor(private TicketService: TicketService,private dialogService:DialogService) {}

  ngOnInit(): void {
    /*Edit form*/
    this.editTicket = new FormGroup({
      StatusNameAr: new FormControl(null, [Validators.required]),
    StatusNameEn: new FormControl(null , [Validators.required])
    });
   
  }
  ngOnChanges()
  {
    this.getTicketInfo(this.ticketId)
  }
  getTicketInfo(id:number) {
    console.log(id)
    this.TicketService.getTicketById(id).subscribe((result:any)=>{
      this.editTicket.patchValue(result.TicketStatus)
      console.log(result)
    })
  }
  editData() {
    this.TicketService.updataTicket(this.ticketId,this.editTicket.value).subscribe((data) => {
      this.dialogService.toggleDisplayDialog(false)
      this.onEditTicket.emit()
      if (data.Message == 'Created') {
        this.TicketService.getTickets();
      }
    });
  }
}
