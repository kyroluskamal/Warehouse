import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkordertypeService } from 'src/app/shared/services/workordertype/workordertype.service';
@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.scss']
})
export class EditworkComponent implements OnInit {
  @Input() workedtypeId:number;
  @Output() onEditWork = new EventEmitter()
  editWork: FormGroup;
  constructor(private WorkordertypeService:WorkordertypeService, private DialogService:DialogService) { }

  ngOnInit(): void {
    /*Edit form*/
    this.editWork = new FormGroup({
      WOypeNameAr: new FormControl(null, [Validators.required]),
      WOypeNameEn: new FormControl(null , [Validators.required])
    });
    console.log(this.workedtypeId)
  }

  ngOnChanges()
  {
    this.getWorkInfo(this.workedtypeId)
  }
  getWorkInfo(id:number) {
    this.WorkordertypeService.getWorkById(id).subscribe((result:any)=>{
      this.editWork.patchValue(result.WorkOrderType)
      console.log(result)
    })
  }
  editData() {
    this.WorkordertypeService.updataworkOrderType(this.workedtypeId,this.editWork.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditWork.emit()
      if (data.Message == 'Created') {
        this.WorkordertypeService.workOrderType();
      }
    });
  }

}
