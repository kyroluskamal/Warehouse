import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkorderRoutingModule } from './workorder-routing.module';
import { WorkorderComponent } from './page/workorder/workorder.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddworkComponent } from './component/addwork/addwork.component';
import { EditworkComponent } from './component/editwork/editwork.component';

@NgModule({
  declarations: [
    WorkorderComponent,
    AddworkComponent,
    EditworkComponent
  ],
  imports: [
    CommonModule,
    WorkorderRoutingModule,SharedModule
  ]
})
export class WorkorderModule { }
