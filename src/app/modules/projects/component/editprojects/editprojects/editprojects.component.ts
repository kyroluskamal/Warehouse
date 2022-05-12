import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.scss']
})
export class EditprojectsComponent implements OnInit {
  @Input() projectId:number;
  editProjects:FormGroup;
  @Output() onEditProject = new EventEmitter()
  itemdetails: any;
  constructor(private DialogService:DialogService, private ProjectsService:ProjectsService) { }

  ngOnInit(): void {

    this.editProjects = new FormGroup({
      ProjectNameAr: new FormControl(null, [Validators.required]),
      ProjectNameEn: new FormControl(null, [Validators.required]),     
    });
  }

  ngOnChanges()
{
  this.getProjectInfo(this.projectId)
}

  getProjectInfo(id:number) {
    this.ProjectsService.getprojectsById(id).subscribe((result:any)=>{
      this.itemdetails = result.Project;
      this.editProjects.patchValue(this.itemdetails);
      
      console.log(result)
    })
  }
  editData() {
    this.ProjectsService.editprojects(this.projectId,this.editProjects.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditProject.emit()
      if (data.Message == 'Created') {
        this.ProjectsService.getprojects();
      }
    });
  }

}
