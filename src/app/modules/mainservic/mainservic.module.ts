import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainservicRoutingModule } from './mainservic-routing.module';
import { MainserviceComponent } from './page/mainservice/mainservice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddmainserviceComponent } from './component/addmainservice/addmainservice/addmainservice.component';
import { EditmaimserviceComponent } from './component/editmainservice/editmaimservice/editmaimservice.component';

@NgModule({
  declarations: [
    MainserviceComponent,
    AddmainserviceComponent,
    EditmaimserviceComponent
  ],
  imports: [
    CommonModule,
    MainservicRoutingModule,
    SharedModule
  ]
})
export class MainservicModule { }
