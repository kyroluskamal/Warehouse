import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.scss']
})
export class EditworkComponent implements OnInit {

  @Input() worktId:number;
  @Output() onEditWork = new EventEmitter()
  editwork: FormGroup;
  constructor(private dialogService:DialogService, private WorkorderService:WorkorderService) { }

  ngOnInit(): void {

  /*add form*/
  this.editwork = new FormGroup({
    StatusNameAr: new FormControl(null, [Validators.required]),
    StatusNameEn: new FormControl(null, [Validators.required]),
    
  });
  // this.getWorkInfo(this.worktId)
  }

  ngOnChanges()
  {
    this.getWorkInfo(this.worktId)

  }

  getWorkInfo(id:number) {
    this.WorkorderService.getWorkById(id).subscribe((result:any)=>{
      
      this.editwork.patchValue(result.Status)
      console.log(result)
    })
  }


  editData() {
    this.WorkorderService.updataworkOrderStatus(this.worktId,this.editwork.value).subscribe((data) => {
      this.dialogService.toggleDisplayDialog(false)
      this.onEditWork.emit()
      if (data.Message == 'Created') {
        this.WorkorderService.workOrderStatus();
      }
    });
  }

}
