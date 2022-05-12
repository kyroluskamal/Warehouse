import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments:any[] = [];
  columns:any[] = ['Id','DeptNameAr','DeptNameEn'];
  labels:string[]=['Id','Department Name Arabic','Department Name English']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  constructor(private dialogService: DialogService , private DepartmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartment();
  }
  getDepartment(){
    this.DepartmentService.getDepartment().subscribe((result:any)=>{
      console.log(result)
      this.departments = result.Department;
      this.isload=true;
      this.departments.forEach((ele:any)=>{
        delete ele['Employees'];
        delete ele['DeptCountOFEmp'];
      })
      this.columns = Object.keys(this.departments[0])
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
    this.DepartmentService.deleteDepartment(id).subscribe((res)=>{
      this.getDepartment();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

}
