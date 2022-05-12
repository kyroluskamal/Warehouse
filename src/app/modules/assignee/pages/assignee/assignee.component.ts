import { Component, OnInit } from '@angular/core';
import { AssigneeService } from 'src/app/shared/services/assignee/assignee.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {
  assignee:any[] = [];
  columns:any[] = ['Id','EmployeeId','EmployeeName , WorkOrderId']; 
  labels:string[]=['Id','Employee ','Employee Name', 'WorkOrderId']

  selectedId: number;
  formType: string;
  AssigneeId:number;
  isload:boolean = false;
  employees: any;
  works: any;
  arr: any[];
  constructor(private AssigneeService:AssigneeService, private DialogService:DialogService,
    private WorkorderService:WorkorderService, private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }


  getAssignee(){
    this.AssigneeService.getAssignee().subscribe((result:any)=>{
      console.log(result)
      this.assignee = result.Assignees;
      this.isload=true;
      if(this.assignee)
      {
        this.assignee.forEach((ele:any)=>{
          delete ele['City']
        })
        this.columns = Object.keys(this.assignee[0])
        console.log(this.columns)
      }
        this.arr=[];
        for(let x = 0; x < this.assignee.length; x++){
          let obj ={  
            Id:this.assignee[x].Id,     
            EmployeeId:this.filterEmployee(this.assignee[x].EmployeeId),
            EmployeeName:this.assignee[x].EmployeeName,
            WorkOrderId:this.filterWorkOrder(this.assignee[x].WorkOrderId),
          }
          this.arr.push(obj);
        }
        this.assignee = this.arr;
      })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.AssigneeService.deleteAssignee(id).subscribe((res)=>{
      this.getAssignee();
    })

  }


        // get employee
  
        getEmployee(){
          this.EmployeeService.getEmployee().subscribe((result:any)=>{
            console.log(result)
            this.employees =result.Employees;
            this.getWorkOrder();
          })
        }
    
        filterEmployee(id:any){    
          let employeeName = _.find(this.employees, function(o) { return o.Id == id; });
          return employeeName?.EmpName;
        }

      // get workorder

      getWorkOrder(){
        this.WorkorderService.workOrderStatus().subscribe((result:any)=>{
          console.log(result)
          this.works =result.Statuses;
          this.getAssignee();
        })
      }
  
      filterWorkOrder(id:any){    
        let employeeName = _.find(this.works, function(o) { return o.Id == id; });
        return employeeName?.StatusNameEn;
      }

}
