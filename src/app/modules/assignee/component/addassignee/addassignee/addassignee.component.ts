import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssigneeService } from 'src/app/shared/services/assignee/assignee.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
AssigneeService
@Component({
  selector: 'app-addassignee',
  templateUrl: './addassignee.component.html',
  styleUrls: ['./addassignee.component.scss']
})
export class AddassigneeComponent implements OnInit {

  addAssignee:FormGroup;
  @Output() onAddAssignee = new EventEmitter()
  emplyees: any[]=[];
  works: any;

  constructor(private dialogService:DialogService, private AssigneeService:AssigneeService,
    private EmployeeService:EmployeeService, private WorkorderService:WorkorderService) { }

  ngOnInit(): void {

        /*add form*/
  this.addAssignee = new FormGroup({
    EmployeeId: new FormControl(null, [Validators.required]),
    EmployeeName: new FormControl(null, [Validators.required]),
    WorkOrderId: new FormControl(null, [Validators.required]),
  });
  this.getEmployee();
  this.getWorkOrder();
  }

  addData() {
    this.AssigneeService.addAssignee(this.addAssignee.value).subscribe((data) => {
      this.addAssignee.reset();
      console.log(data)
      this.dialogService.toggleDisplayDialog(false)
      this.onAddAssignee.emit()
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
