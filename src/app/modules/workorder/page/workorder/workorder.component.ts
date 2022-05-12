import { Component, OnInit } from '@angular/core';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss']
})
export class WorkorderComponent implements OnInit {
  works:any[] = [];
  columns:any[] = ['Id','StatusNameAr','StatusNameEn'];
  labels:string[]=['Id','Status Name Arabic','Status Name English']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  constructor(private WorkorderService:WorkorderService , private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getworkOrderStatus()
  }
  getworkOrderStatus(){
    this.WorkorderService.workOrderStatus().subscribe((result:any)=>{
      console.log(result)
      this.works = result.Statuses;
      this.isload=true;
      this.columns = Object.keys(this.works[0])
      console.log(this.columns)
    })
  }
  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.WorkorderService.deletworkOrderStatus(id).subscribe((res)=>{
      this.getworkOrderStatus();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }
}
