import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';


@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.scss']
})
export class EditdepartmentComponent implements OnInit {
  @Input() depatmenttId:number;
  editDepartment:FormGroup;
  @Output() onEditDepartment = new EventEmitter()
  itemdetails:{};
  constructor(private DepartmentService:DepartmentService , private DialogService:DialogService) { }

  ngOnInit(): void {
      /*add form*/
  this.editDepartment = new FormGroup({
  DeptNameAr: new FormControl(null, [Validators.required]),
  DeptNameEn: new FormControl(null, [Validators.required]),
  DeptCountOFEmp:new FormControl(0)
  
});
}
ngOnChanges()
{
  this.getDepartmentInfo(this.depatmenttId)
}

  getDepartmentInfo(id:number) {
    this.DepartmentService.getDepartmentById(id).subscribe((result:any)=>{
      this.itemdetails = result.Department;
      this.editDepartment.patchValue(this.itemdetails);
      
      console.log(result)
    })
  }
  editData() {
    this.DepartmentService.editDepartment(this.depatmenttId,this.editDepartment.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditDepartment.emit()
      if (data.Message == 'Created') {
        this.DepartmentService.getDepartment();
      }
    });
  }


}
