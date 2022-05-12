import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubserviceRoutingModule } from './subservice-routing.module';
import { SubserviceComponent } from './page/subservice/subservice.component';
import { AddsubservComponent } from './component/addsubserv/addsubserv/addsubserv.component';
import { EditsubservComponent } from './component/editsubserv/editsubserv/editsubserv.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SubserviceComponent,
    AddsubservComponent,
    EditsubservComponent
  ],
  imports: [
    CommonModule,
    SubserviceRoutingModule,SharedModule
  ]
})
export class SubserviceModule { }
