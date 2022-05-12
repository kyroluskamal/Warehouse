import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './pages/vendor/vendor.component';
import { AddvendorComponent } from './component/addvendor/addvendor/addvendor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditvendorComponent } from './component/editvendor/editvendor/editvendor.component';
@NgModule({
  declarations: [
    VendorComponent,
    AddvendorComponent,EditvendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,SharedModule
  ]
})
export class VendorModule { }
