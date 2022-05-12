import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AadprojectsComponent } from './component/addprojects/aadprojects/aadprojects.component';
import { EditprojectsComponent } from './component/editprojects/editprojects/editprojects.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    AadprojectsComponent,
    EditprojectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,SharedModule
  ]
})
export class ProjectsModule { }
