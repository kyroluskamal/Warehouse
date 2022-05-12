import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssigneeRoutingModule } from './assignee-routing.module';
import { AssigneeComponent } from './pages/assignee/assignee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditassigneeComponent } from './component/editassignee/editassignee/editassignee.component';
import { AddassigneeComponent } from './component/addassignee/addassignee/addassignee.component';

@NgModule({
  declarations: [
    AssigneeComponent,
    EditassigneeComponent,AddassigneeComponent
  ],
  imports: [
    CommonModule,
    AssigneeRoutingModule,
    SharedModule
  ]
})
export class AssigneeModule { }
