import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import {ConfirmationService,MessageService} from "primeng/api";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class TableComponent implements OnInit {
  @Input() tableData: any[] = [];
  @Input() tableColumns: any[] = [];
  @Input() tableLabels: any[] = [];
  @Input() customButton:TemplateRef<any>
  @Output() onEditRow = new EventEmitter()
  @Output() onDeleteRow = new EventEmitter()
  @Output() showRowDetails:EventEmitter<number> = new EventEmitter()
  id: string = this.tableColumns[0];
  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit(): void {

  }
  editRow(id:number,event){
    event.stopPropagation();
    this.onEditRow.emit(id)
  }

//   confirm(event: Event , id) {
//     this.confirmationService.confirm({
//         target: event.target,
//         message: 'Are you sure that you want to delet?',
//         icon: 'pi pi-exclamation-triangle',
//         accept: () => {
//           this.deleteRow(id)
//         },
//         reject: () => {
//             //reject action
//         }
//     });
// }
  deleteRow(id:number,event){
    event.stopPropagation();
   
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to delete ?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.onDeleteRow.emit(id)
        this.messageService.add({
          key: 'tc',
          severity: "error",
          summary: "Confirmed",
          detail: "You have accepted"
        });

      },
      reject: () => {
        this.messageService.add({
          key: 'tc',
          severity: "info",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }

  public showDetails(id:number):void{
   this.showRowDetails.emit(id)
  }
}
