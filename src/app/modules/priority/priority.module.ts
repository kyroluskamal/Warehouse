import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriorityRoutingModule } from './priority-routing.module';
import { PriorityComponent } from './pages/priority/priority.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddpriorityComponent } from './component/addpriority/addpriority/addpriority.component';
import { EditpriorityComponent } from './component/editpriority/editpriority/editpriority.component';


@NgModule({
  declarations: [
    PriorityComponent,
    AddpriorityComponent,
    EditpriorityComponent
  ],
  imports: [
    CommonModule,
    PriorityRoutingModule,SharedModule
  ]
})
export class PriorityModule { }
