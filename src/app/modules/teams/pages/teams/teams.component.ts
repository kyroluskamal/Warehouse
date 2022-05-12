import { Component, OnInit } from '@angular/core';

import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { TeamService } from 'src/app/shared/services/teams/team.service';
import * as _ from 'lodash';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  Teams:any[] = [];
  columns:any[] = ['Id','WorkOrderId','ProjectId','EmployeeId'];
  labels:string[]=['Id','Work Order','Project','Employee']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  projects: any;
  employees: any;
  works: any;
  arr: any[];
  constructor(private dialogService: DialogService ,
    private TeamService:TeamService,
    private WorkorderService:WorkorderService,
    private EmployeeService:EmployeeService,
    private ProjectsService:ProjectsService) { }

  ngOnInit(): void {
    this.getWorkOrder();
  }

  
  getTeam(){
    this.TeamService.getTeam().subscribe((result:any)=>{
      console.log('ttttttttttttttttt',result)
      this.Teams = result.Teams;
      this.isload=true;
      if(this.Teams)
      {
        this.Teams.forEach((ele:any)=>{
        })
        this.columns = Object.keys(this.Teams[0])
      }
      this.arr=[];

      for(let x = 0; x < this.Teams.length; x++){
        let obj ={  
          Id:this.Teams[x].Id,     
          WorkOrderId:this.filterWorkOrder(this.Teams[x].WorkOrderId),
          ProjectId:this.filterProjects(this.Teams[x].ProjectId),
          EmployeeId:this.filterEmployee(this.Teams[x].EmployeeId),
        }
        this.arr.push(obj);
      }
      this.Teams = this.arr;
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
    this.TeamService.deleteTeam(id).subscribe((res)=>{
      this.getTeam();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

    // get workorder

    getWorkOrder(){
      this.WorkorderService.workOrderStatus().subscribe((result:any)=>{
        console.log(result)
        this.works =result.Statuses;
        this.getProjects();
      })
    }

    filterWorkOrder(id:any){    
      let employeeName = _.find(this.works, function(o) { return o.Id == id; });
      return employeeName?.StatusNameEn;
    }

    // get projects

    getProjects()
    {
      this.ProjectsService.getprojects().subscribe((result:any)=>{
        console.log(result)
        this.projects = result.Project;
        this.getEmployee();
      })
    }
  
    filterProjects(id:any){    
      let projectName = _.find(this.projects, function(o) { return o.Id == id; });
      return projectName?.ProjectNameEn;
    }
  
      // get employee
  
    getEmployee(){
      this.EmployeeService.getEmployee().subscribe((result:any)=>{
        console.log(result)
        this.employees =result.Employees;
        this.getTeam();
      })
    }

    filterEmployee(id:any){    
      let employeeName = _.find(this.employees, function(o) { return o.Id == id; });
      return employeeName?.EmpName;
    }


}
