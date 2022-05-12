import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { CityService } from './services/city/city.service';
import { WorkorderService } from './services/workorder/workorder.service';
import { UserService } from './services/user/user.service';
import { TicketService } from './services/ticket/ticket.service';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { PrimengModule } from './primeng/primeng.module';
import { AngularmaterialModule } from './angularmaterial/angularmaterial/angularmaterial.module';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CounteryService } from './services/countery/countery.service';
import { MainserviesService } from './services/mainservices/mainservies.service';
import { ServicepriceService } from "./services/service price/serviceprice.service";
import { WorkordertypeService } from './services/workordertype/workordertype.service';
import { UnitService } from './services/unit/unit.service';
import { ServicetypeService } from './services/servicetype/servicetype.service';

import { PurchasesorderComponent } from './services/purchases order/purchasesorder/purchasesorder.component';
import { ProfessionService } from './services/profession/profession.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb/breadcrumb.component';
import{BreadcrumbModule} from 'xng-breadcrumb'
@NgModule({
  declarations: [
    TableComponent,
    DialogComponent,
    PurchasesorderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    AngularmaterialModule,BreadcrumbModule
  ],
  providers: [
    AuthService,
    CityService,
    UserService,
    CounteryService,
    TicketService,
    WorkorderService,
    MainserviesService,
    ServicepriceService,
    WorkordertypeService,
    UnitService,
    ServicetypeService,ProfessionService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  exports: [FormsModule, ReactiveFormsModule, HttpClientModule,PrimengModule,TableComponent,DialogComponent,BreadcrumbModule],
})
export class SharedModule {}
