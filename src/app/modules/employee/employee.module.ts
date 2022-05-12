import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddemployeeComponent } from './component/addemployee/addemployee/addemployee.component';
import { EditemployeeComponent } from './component/editemployee/editemployee/editemployee.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,SharedModule
  ]
})
export class EmployeeModule { }
