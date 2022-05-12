import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.scss']
})
export class AdddepartmentComponent implements OnInit {
  addDepartment:FormGroup;
  @Output() onaddDepartment = new EventEmitter()
  constructor(private DepartmentService:DepartmentService , private DialogService:DialogService) { }

  ngOnInit(): void {

  /*add form*/
  this.addDepartment = new FormGroup({
    DeptNameAr: new FormControl(null, [Validators.required]),
    DeptNameEn: new FormControl(null, [Validators.required]),
    DeptCountOFEmp:new FormControl(0)
    
  });
  }

  addData() {
    this.DepartmentService.addDepartment(this.addDepartment.value).subscribe((data) => {
      this.addDepartment.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddDepartment.emit()
    });
  }

}
