import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from "primeng/api";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class TableComponent implements OnInit, OnChanges
{
  @ViewChild("Menu", { read: ElementRef }) Menu: ElementRef<HTMLUListElement> = {} as ElementRef<HTMLUListElement>;
  @ViewChild("MenuTrigger", { read: ElementRef }) MenuTrigger: ElementRef<HTMLButtonElement> = {} as ElementRef<HTMLButtonElement>;
  @Input() tableData: any[] = [];
  @Input() tableColumns: any[] = [];
  @Input() tableLabels: any[] = [];
  @Input() ShowMenuButton: boolean = false;
  @Input() customButton: TemplateRef<any>;
  @Output() onEditRow = new EventEmitter();
  @Output() onDeleteRow = new EventEmitter();
  @Output() ChangeStatusClicked = new EventEmitter();
  @Output() showRowDetails: EventEmitter<number> = new EventEmitter();
  id: string = this.tableColumns[0];
  constructor(private confirmationService: ConfirmationService, @Inject(DOCUMENT) private document: Document,
    private messageService: MessageService) { }
  ngOnChanges(changes: SimpleChanges): void
  {
    if ("tableData" in changes)
    {
      this.tableData = changes.tableData.currentValue;
    }
  }

  ngOnInit(): void
  {

  }
  editRow(id: number, event)
  {
    event.stopPropagation();
    this.onEditRow.emit(id);
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
  deleteRow(id: number, event)
  {
    event.stopPropagation();

    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to delete ?",
      icon: "pi pi-exclamation-triangle",
      accept: () =>
      {
        this.onDeleteRow.emit(id);
        this.messageService.add({
          key: 'tc',
          severity: "error",
          summary: "Confirmed",
          detail: "You have accepted"
        });

      },
      reject: () =>
      {
        this.messageService.add({
          key: 'tc',
          severity: "info",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }

  public showDetails(id: number): void
  {
    this.showRowDetails.emit(id);
  }
  changeStatus(id: number)
  {
    this.Menu.nativeElement.style.display = "none";
    this.ChangeStatusClicked.emit(id);
  }
  openMenu(event: any)
  {

    this.document.body.append(this.Menu.nativeElement);
    this.Menu.nativeElement.style.position = "absolute";

    if (this.Menu.nativeElement.style.display === "none")
    {
      this.Menu.nativeElement.style.display = "block";
      this.Menu.nativeElement.style.top = event.clientY + 25 + "px";
      this.Menu.nativeElement.style.left = event.clientX - 100 + "px";
    }
    else
    {
      debugger;
      if (event.clientY < this.Menu.nativeElement.offsetTop - 50)
      {
        this.Menu.nativeElement.style.top = event.clientY + 25 + "px";
        this.Menu.nativeElement.style.left = event.clientX - 100 + "px";
        this.Menu.nativeElement.style.display = "none";
        this.Menu.nativeElement.style.display = "block";
      } else
        this.Menu.nativeElement.style.display = "none";
    }
  }
}
