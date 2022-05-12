import { Component, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PriorityService } from 'src/app/shared/services/priority/priority.service';
@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {
  priority:any[] = [];
  columns:any[] = ['id','PriorityNameAr','PriorityNameEn'];
  labels:string[]=['id','PriorityNameAr','PriorityNameEn']

  selectedId: number;
  formType: string;
  itemdetails: any;
  constructor(private PriorityService:PriorityService, private DialogService:DialogService) { }

  
  ngOnInit(): void {
    this.getpriority();
  }

  getpriority(){
    this.PriorityService.getAllPriority().subscribe((result:any)=>{
      console.log(result)
      this.priority = result.Priority
      this.priority.forEach((ele:any)=>{
      })
      this.columns = Object.keys(this.priority[0])
      console.log(this.columns)
    })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.PriorityService.deletePriority(id).subscribe((res)=>{
      this.getpriority();
    })

  }
}
