import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {
  departments:any;
  professions:any;
  @Input() employeeId:number;
  editEmployee:FormGroup;
  @Output() onEditEmployee = new EventEmitter()
  constructor(private EmployeeService:EmployeeService, private DialogService:DialogService,
    private DepartmentService:DepartmentService, private ProfessionService:ProfessionService) { }

  ngOnInit(): void {
          /*add form*/
  this.editEmployee = new FormGroup({
    EmpName: new FormControl(null, [Validators.required]),
    EmpIqama: new FormControl(null, [Validators.required]),
    EmpDateOfBirth: new FormControl(null, [Validators.required]),
    EmpNationality: new FormControl(null, [Validators.required]),
    EmpSex: new FormControl(null, [Validators.required]),
    EmpReligion: new FormControl(null, [Validators.required]),
    EmpFamilyState: new FormControl(null, [Validators.required]),
    ProfessionId: new FormControl(null, [Validators.required]),
    DepartmentId: new FormControl(null, [Validators.required]),
  });
  }

  ngOnChanges()
{
  this.getEmployeeInfo(this.employeeId)
}

  getEmployeeInfo(id:number) {
    this.EmployeeService.getEmployeeById(id).subscribe((result:any)=>{
      this.editEmployee.patchValue(result.Employee);
      
      console.log('hhhhhhhhhhhhh',result)
    })
  }
  editData() {
    this.EmployeeService.updataEmployee(this.employeeId,this.editEmployee.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditEmployee.emit()
      if (data.Message == 'Created') {
        this.EmployeeService.getEmployee();
      }
    });
  }

       // get department
       getDepartment(){
        this.DepartmentService.getDepartment().subscribe((result:any)=>{
          console.log(result)
          this.departments =result.Department
        })
      }
      selectDepartment(event:any){
    
        this.getDepatmentById(event.target.value)
      }
    
      getDepatmentById(Id:number){
        this.DepartmentService.getDepartmentById(Id).subscribe((result:any)=>{
          // console.log(result.Country['City'])
          // this.Cities = result.Country['City']
        })
      }
    
      // get profession
    
      getprofession(){
        this.ProfessionService.getAllProfession().subscribe((result:any)=>{
          console.log(result)
          this.professions =result.Profession
          
        })
      }
      selectprofession(event:any){
    
        this.geprofessiontById(event.target.value)
      }
    
      geprofessiontById(Id:number){
        this.ProfessionService.getAllProfessionById(Id).subscribe((result:any)=>{
          // console.log(result.Country['City'])
          // this.Cities = result.Country['City']
        })
      }

}
