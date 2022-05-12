import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss'],
})
export class AddticketComponent implements OnInit {
  addTicket:FormGroup;
  @Output() onAddTicket = new EventEmitter()
  constructor(private TicketService: TicketService,private dialogService:DialogService) {}

  ngOnInit(): void {
    /*add form*/
  this.addTicket = new FormGroup({
    StatusNameAr: new FormControl(null, [Validators.required]),
    StatusNameEn: new FormControl(null , [Validators.required]),
  });
  }

  addData() {
    this.TicketService.addTicket(this.addTicket.value).subscribe((data) => {
      this.addTicket.reset();
      console.log(data)
      this.dialogService.toggleDisplayDialog(false)
      this.onAddTicket.emit()
    });
  }
}
