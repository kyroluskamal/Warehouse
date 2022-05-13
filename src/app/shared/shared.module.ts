import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { BreadcrumbModule } from 'xng-breadcrumb';
import { UserTypePipe } from '../Pipes/user-type.pipe';
import { ConfirmPaymentPipe } from '../Pipes/confirm-payment.pipe';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    TableComponent,
    DialogComponent,
    PurchasesorderComponent,
    BreadcrumbComponent,
    UserTypePipe,
    ConfirmPaymentPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    GoogleMapsModule,
    AngularmaterialModule, BreadcrumbModule,
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
    DatePipe,
    ServicetypeService, ProfessionService,
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  exports: [FormsModule, ReactiveFormsModule, HttpClientModule,
    PrimengModule, ConfirmPaymentPipe, GoogleMapsModule,
    UserTypePipe, TableComponent, DialogComponent, BreadcrumbModule],
})
export class SharedModule { }
