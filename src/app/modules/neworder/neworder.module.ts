import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeworderRoutingModule } from './neworder-routing.module';
import { NeworderComponent } from './page/neworder/neworder.component';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NeworderComponent
  ],
  imports: [
    CommonModule,
    NeworderRoutingModule
  ]
})
export class NeworderModule { }
