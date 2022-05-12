import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [];
  columns:any[] = ['Id','ProjectNameAr','ProjectNameEn'];
  labels:string[]=['Id','Project Name Arabic','Project Name English']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  constructor(private dialogService: DialogService , private ProjectsService:ProjectsService) {

   }


   ngOnInit(): void {
    this.getProjects();
  }

  
  getProjects(){
    this.ProjectsService.getprojects().subscribe((result:any)=>{
      console.log(result)
      this.projects = result.Project;
      this.isload=true;
      this.projects.forEach((ele:any)=>{
          delete ele ['Teams']
      })
      this.columns = Object.keys(this.projects[0])
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
    this.ProjectsService.deleteprojects(id).subscribe((res)=>{
      this.getProjects();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

}
