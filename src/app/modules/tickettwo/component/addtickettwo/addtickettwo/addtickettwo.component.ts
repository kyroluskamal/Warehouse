import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { TickettwoService } from 'src/app/shared/services/tickettwo/tickettwo.service';
import { ClientService } from 'src/app/shared/services/client/client.service';
@Component({
  selector: 'app-addtickettwo',
  templateUrl: './addtickettwo.component.html',
  styleUrls: ['./addtickettwo.component.scss']
})
export class AddtickettwoComponent implements OnInit {
  addTicket:FormGroup;
  @Output() onAddTicket = new EventEmitter()
  Tickts: any;
  users: any[]=[];
  selectUser = '';
  constructor(private TicketService: TicketService,private dialogService:DialogService,
    private TickettwoService:TickettwoService,private ClientService:ClientService) { }

    ngOnInit(): void {
      /*add form*/
    this.addTicket = new FormGroup({
      TicketNumber: new FormControl(null, [Validators.required]),
      UserId: new FormControl(null , [Validators.required]),
      DayDate: new FormControl(null , [Validators.required]),
      Time: new FormControl(null , [Validators.required]),
      TicketStatusId: new FormControl(null , [Validators.required]),
    });
    this.getTicketStatus();
    this.getUser();
    }
  
    addData() {
      this.TickettwoService.addTicket(this.addTicket.value).subscribe((data) => {
        this.addTicket.reset();
        console.log(data)
        this.dialogService.toggleDisplayDialog(false)
        this.onAddTicket.emit()
      });

    }

      // get ticket status

  getTicketStatus() {
    this.TicketService.getTickets().subscribe((result: any) => {
      console.log('hhhhhhhhhhhhh',result)
      this.Tickts = result.TicketStatuses;

    });
  }
  selectTicket(event: any) {

    this.geTicketById(event.target.value)
  }

  geTicketById(Id: number) {
    this.TicketService.getTicketById(Id).subscribe((result: any) => {
      console.log(result)
    })
  }


    // get user

    getUser() {
      this.ClientService.getAllUser().subscribe((result: any) => {
        console.log('mmmmmmmmmmmmm',result)
        this.users = result.Users;
  
      });
    }
    // selectUser(event: any) {
  
    //   this.geUserById(event.target.value)
    // }
  
    // geUserById(Id: number) {
    //   this.ClientService.getAllUserById(Id).subscribe((result: any) => {
    //     console.log(result)
    //   })
    // }

}
