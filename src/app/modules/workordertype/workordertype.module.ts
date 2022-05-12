import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkordertypeRoutingModule } from './workordertype-routing.module';
import { WorkordertypeComponent } from './page/workordertype/workordertype.component';
import { AddworktypeComponent } from './component/addworktype/addworktype/addworktype.component';
import { EditworkComponent } from './component/editworktype/editwork/editwork.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WorkordertypeComponent,
    AddworktypeComponent,
    EditworkComponent
  ],
  imports: [
    CommonModule,
    WorkordertypeRoutingModule,SharedModule
  ]
})
export class WorkordertypeModule { }
