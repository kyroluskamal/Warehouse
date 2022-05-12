import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ToastModule } from "primeng/toast";
import {GMapModule} from 'primeng/gmap';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
const primengModules = [
  TableModule,
  ButtonModule,
  InputTextModule,
  DialogModule,ConfirmPopupModule,ToastModule,
  GMapModule,DropdownModule,CheckboxModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengModules
  ],
  exports:[primengModules]
})
export class PrimengModule { }
