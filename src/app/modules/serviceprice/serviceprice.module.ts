import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicepriceRoutingModule } from './serviceprice-routing.module';
import { ServicepriceComponent } from './page/serviceprice/serviceprice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddpriceComponent } from './componenet/addprice/addprice.component';
import { EditpriceComponent } from './componenet/editprice/editprice.component';


@NgModule({
  declarations: [
    ServicepriceComponent,
    AddpriceComponent,
    EditpriceComponent
  ],
  imports: [
    CommonModule,
    ServicepriceRoutingModule,
    SharedModule
  ]
})
export class ServicepriceModule { }
