import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './page/department/department.component';
import { EditdepartmentComponent } from './component/editdepartment/editdepartment/editdepartment.component';
import { AdddepartmentComponent } from './component/adddepartment/adddepartment/adddepartment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartmentComponent,
    EditdepartmentComponent,
    AdddepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ]
})
export class DepartmentModule { }
