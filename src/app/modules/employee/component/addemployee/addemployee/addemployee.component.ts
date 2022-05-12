import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  departments:any;
  addEmployee:FormGroup;
  @Output() onaddEmployee = new EventEmitter()
  professions: any;
  constructor(private EmployeeService:EmployeeService, private DialogService:DialogService,
    private DepartmentService:DepartmentService, private ProfessionService:ProfessionService) { }

  ngOnInit(): void {

      /*add form*/
  this.addEmployee = new FormGroup({
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
  this.getDepartment()
  this.getprofession();
  }

  addData() {
    this.EmployeeService.addEmployee(this.addEmployee.value).subscribe((data) => {
      this.addEmployee.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddEmployee.emit()
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
