import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PriorityService } from 'src/app/shared/services/priority/priority.service';

@Component({
  selector: 'app-editpriority',
  templateUrl: './editpriority.component.html',
  styleUrls: ['./editpriority.component.scss']
})
export class EditpriorityComponent implements OnInit {
  @Input() priorityId:number;
  editpriority:FormGroup;
  @Output() onEditPriority = new EventEmitter()
  itemdetails: {};
  constructor(private PriorityService:PriorityService,private DialogService:DialogService) { }

  ngOnInit(): void {

                /*add form*/
  this.editpriority = new FormGroup({
    PriorityNameAr: new FormControl(null, [Validators.required]),
    PriorityNameEn: new FormControl(null, [Validators.required]),
  });
  }

  ngOnChanges()
  {
    this.getDepartmentInfo(this.priorityId);
  }
  getDepartmentInfo(id:number) {
    this.PriorityService.getAllPriorityById(id).subscribe((result:any)=>{
      this.itemdetails = result.Priority;
      this.editpriority.patchValue(this.itemdetails)
      console.log(result)
    })
  }
  editData() {
    this.PriorityService.editPriority(this.priorityId,this.editpriority.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditPriority.emit()
      if (data.Message == 'Created') {
        this.PriorityService.getAllPriority();
      }
    });
  }

}
