import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitmeasureRoutingModule } from './unitmeasure-routing.module';
import { UnitComponent } from './page/unit/unit.component';
import { AddunitComponent } from './component/addunit/addunit/addunit.component';
import { EditunitComponent } from './component/editunit/editunit/editunit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UnitComponent,
    AddunitComponent,
    EditunitComponent
  ],
  imports: [
    CommonModule,
    UnitmeasureRoutingModule,SharedModule
  ]
})
export class UnitmeasureModule { }
