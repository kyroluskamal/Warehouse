import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/shared/services/teams/team.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';


@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.scss']
})
export class EditteamComponent implements OnInit {
  editTeam:FormGroup;
  @Output() onEditTeam = new EventEmitter()
  itemdetails: any;
  @Input() teamId:number;
  works: any;
  projects: any;
  emplyees: any;
  constructor(private DialogService: DialogService, private TeamService: TeamService,
    private WorkorderService: WorkorderService,
     private EmployeeService: EmployeeService, private ProjectsService: ProjectsService) { }

  ngOnInit(): void {
        /*add form*/
this.editTeam = new FormGroup({
  WorkOrderId: new FormControl(null, [Validators.required]),
  ProjectId: new FormControl(null, [Validators.required]),
  EmployeeId: new FormControl(null, [Validators.required]),
  
});
}

ngOnChanges()
{
  this.getTeamtInfo(this.teamId)
}

  getTeamtInfo(id:number) {
    this.TeamService.getTeamById(id).subscribe((result:any)=>{
      this.itemdetails = result.Teams;
      this.editTeam.patchValue(this.itemdetails);
      
      console.log('sssssssssssssssss',result)
    })
  }
  editData() {
    this.TeamService.editTeam(this.teamId,this.editTeam.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditTeam.emit()
      if (data.Message == 'Created') {
        this.TeamService.getTeam();
      }
    });
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
    
      // get project
    
      getProjects() {
        this.ProjectsService.getprojects().subscribe((result: any) => {
          console.log(result)
          this.projects = result.Project;
        })
      }
      selecProject(event: any) {
    
        this.geWorkById(event.target.value)
      }
    
      geProjectById(Id: number) {
        this.ProjectsService.getprojectsById(Id).subscribe((result: any) => {
          console.log(result)
        })
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

}
