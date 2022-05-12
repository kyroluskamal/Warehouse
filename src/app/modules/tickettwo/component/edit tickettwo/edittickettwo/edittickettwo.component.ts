import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { TickettwoService } from 'src/app/shared/services/tickettwo/tickettwo.service';
import { ClientService } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-edittickettwo',
  templateUrl: './edittickettwo.component.html',
  styleUrls: ['./edittickettwo.component.scss']
})
export class EdittickettwoComponent implements OnInit {
  @Input() ticketId:number;
  @Output() onEditTicket = new EventEmitter()
  editTicket: FormGroup;
  Tickts: any;
  users: any;

  constructor(private TicketService: TicketService,private dialogService:DialogService,
    private TickettwoService:TickettwoService,private ClientService:ClientService) { }

    ngOnInit(): void {
      /*add form*/
    this.editTicket = new FormGroup({
      TicketNumber: new FormControl(null, [Validators.required]),
      UserId: new FormControl(null , [Validators.required]),
      DayDate: new FormControl(null , [Validators.required]),
      Time: new FormControl(null , [Validators.required]),
      TicketStatusId: new FormControl(null , [Validators.required]),
    });
    this.getTicketStatus();
    this.getUser();
    }

    ngOnChanges()
    {
      this.getTicketInfo(this.ticketId)
    }
    getTicketInfo(id:number) {
      console.log(id)
      this.TickettwoService.getTicketById(id).subscribe((result:any)=>{
        this.editTicket.patchValue(result.Ticket)
        console.log('aaaaaaaaaaaaaa',result)
      })
    }
    editData() {
      this.TickettwoService.updataTicket(this.ticketId,this.editTicket.value).subscribe((data) => {
        this.dialogService.toggleDisplayDialog(false)
        this.onEditTicket.emit()
        if (data.Message == 'Created') {
          this.TicketService.getTickets();
        }
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


    // get ticket status

    getUser() {
      this.ClientService.getAllUser().subscribe((result: any) => {
        console.log('mmmmmmmmmmmmm',result)
        this.users = result.Users;
  
      });
    }
    selectUser(event: any) {
  
      this.geUserById(event.target.value)
    }
  
    geUserById(Id: number) {
      this.ClientService.getAllUserById(Id).subscribe((result: any) => {
        console.log(result)
      })
    }

}
