import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsertypeRoutingModule } from './usertype-routing.module';
import { UsertypeComponent } from './page/usertype/usertype.component';
import { EditusertypeComponent } from './component/editusertype/editusertype/editusertype.component';
import { AddusertypeComponent } from './component/addusertype/addusertype/addusertype.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    UsertypeComponent,
    EditusertypeComponent,
    AddusertypeComponent
  ],
  imports: [
    CommonModule,
    UsertypeRoutingModule,SharedModule
  ]
})
export class UsertypeModule { }
