import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssigneeService } from 'src/app/shared/services/assignee/assignee.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-editassignee',
  templateUrl: './editassignee.component.html',
  styleUrls: ['./editassignee.component.scss']
})
export class EditassigneeComponent implements OnInit {
  works: any;
  emplyees: any;
  editAssignee:FormGroup;
  @Output() onEditassignee = new EventEmitter()
  itemdetails: any;
  @Input() AssigneeId:number;
  constructor(private dialogService:DialogService, private AssigneeService:AssigneeService,
    private EmployeeService:EmployeeService, private WorkorderService:WorkorderService) { }

  ngOnInit(): void {

            /*add form*/
  this.editAssignee = new FormGroup({
    EmployeeId: new FormControl(null, [Validators.required]),
    EmployeeName: new FormControl(null, [Validators.required]),
    WorkOrderId: new FormControl(null, [Validators.required]),
  });
  this.getEmployee();
  this.getWorkOrder();
  }

  ngOnChanges()
{
  this.getAssigneeInfo(this.AssigneeId)
}

  getAssigneeInfo(id:number) {
    this.AssigneeService.getAssigneeById(id).subscribe((result:any)=>{
      this.itemdetails = result.Assignees;
      this.editAssignee.patchValue(this.itemdetails);
      
      console.log(result);
    })
  }
  editData() {
    this.AssigneeService.editAssignee(this.AssigneeId,this.editAssignee.value).subscribe((data) => {
      this.dialogService.toggleDisplayDialog(false)
      this.onEditassignee.emit()
      if (data.Message == 'Created') {
        this.AssigneeService.getAssignee();
      }
    });
  }

      // get employee

      getEmployee() {
        this.EmployeeService.getEmployee().subscribe((result: any) => {
          console.log(result)
          this.emplyees = result.Employees;
        })
      }
      selecEmployee(event: any) {
    
        this.geEmployeeById(event.target.value)
      }
    
      geEmployeeById(Id: number) {
        this.EmployeeService.getEmployeeById(Id).subscribe((result: any) => {
          console.log(result)
        })
      }
  
        // get work
  
    getWorkOrder() {
      this.WorkorderService.workOrderStatus().subscribe((result: any) => {
        console.log(result)
        this.works = result.Statuses;
  
      });
    }
    selectWork(event: any) {
  
      this.geWorkById(event.target.value)
    }
  
    geWorkById(Id: number) {
      this.WorkorderService.getWorkById(Id).subscribe((result: any) => {
        console.log(result)
      })
    }

}
