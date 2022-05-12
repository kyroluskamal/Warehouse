import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounteryRoutingModule } from './countery-routing.module';
import { CounteryComponent } from './pages/countery/countery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditcounteryComponent } from './component/editcountery/editcountery.component';
import { AddcounteryComponent } from './component/addcountery/addcountery.component';

@NgModule({
  declarations: [
    CounteryComponent,
    EditcounteryComponent,
    AddcounteryComponent
  ],
  imports: [
    CommonModule,
    CounteryRoutingModule,
    SharedModule
  ]
})
export class CounteryModule { }
