import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-aadprojects',
  templateUrl: './aadprojects.component.html',
  styleUrls: ['./aadprojects.component.scss']
})
export class AadprojectsComponent implements OnInit {
  addProjects:FormGroup;
  @Output() onaddprojects = new EventEmitter()
  constructor(private DialogService:DialogService, private ProjectsService:ProjectsService) { }

  ngOnInit(): void {

      /*add form*/
  this.addProjects = new FormGroup({
    ProjectNameAr: new FormControl(null, [Validators.required]),
    ProjectNameEn: new FormControl(null, [Validators.required]),
    
  });
  }

  addData() {
    this.ProjectsService.addprojects(this.addProjects.value).subscribe((data) => {
      this.addProjects.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddprojects.emit()
    });
  }

}
