import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any[] = [];
  departments:any[] = [];
  professions:any[]=[]
  columns:any[] = ['Id','EmpName','EmpIqama','EmpDateOfBirth','EmpNationality','EmpSex','EmpReligion','EmpFamilyState','ProfessionId','DepartmentId'];
  labels:string[]=['Id','Employee Name','Employee Iqama','Employee Date Of Birth','Employee Nationality','Employee Sex','Employee Religion','Employee Family State','Profession','Department']
  arr: any[]=[];
  selectedId: number;
  formType: string;
  isload:boolean = false;
  constructor(private dialogService: DialogService , private EmployeeService:EmployeeService,
    private DepartmentService:DepartmentService, private ProfessionService:ProfessionService) {

     }

  ngOnInit(): void {
    
    this.getDepartment();
    
  }
  getEmployee(){
    this.EmployeeService.getEmployee().subscribe((result:any)=>{
      console.log(result)
      this.employee = result.Employees;
      this.isload=true;
      if(this.employee)
      {
        this.employee.forEach((ele:any)=>{
        })
        this.columns = Object.keys(this.employee[0])
      }
      this.arr=[];
      for(let x = 0; x < this.employee.length; x++){
        let obj ={
          Id:this.employee[x].Id,
          EmpName:this.employee[x].EmpName,
          EmpIqama:this.employee[x].EmpIqama,
          EmpDateOfBirth:this.employee[x].EmpDateOfBirth,
          EmpNationality:this.employee[x].EmpNationality,
          EmpSex:this.employee[x].EmpSex,
          EmpReligion:this.employee[x].EmpReligion,
          EmpFamilyState:this.employee[x].EmpFamilyState,        
          DepartmentId:this.filterDepartment(this.employee[x].DepartmentId),
          ProfessionId:this.filterProfession(this.employee[x].ProfessionId),
        }
        this.arr.push(obj);
      }
      this.employee = this.arr;
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
    this.EmployeeService.deletEmployee(id).subscribe((res)=>{
      this.getEmployee();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }


  // get department
  getDepartment()
  {
    this.DepartmentService.getDepartment().subscribe((result:any)=>{
      console.log(result)
      this.departments =result.Department;
      this.getprofession();
    })
  }

  filterDepartment(id:any){    
    let departmentName = _.find(this.departments, function(o) { return o.Id == id; });
    return departmentName?.DeptNameEn;
  }

    // get profession

    getprofession(){
      this.ProfessionService.getAllProfession().subscribe((result:any)=>{
        console.log(result)
        this.professions =result.Profession;
        this.getEmployee();
      })
    }

    filterProfession(id:any){    
      let professionName = _.find(this.professions, function(o) { return o.Id == id; });
      return professionName?.ProfessionNameEn;
    }
}
