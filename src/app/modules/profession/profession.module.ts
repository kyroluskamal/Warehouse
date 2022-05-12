import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionRoutingModule } from './profession-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionComponent } from './page/profession/profession.component';
import { EditprofessionComponent } from './component/editprofession/editprofession/editprofession.component';
import { AddprofessionComponent } from './component/addprofession/addprofession/addprofession.component';

@NgModule({
  declarations: [
    ProfessionComponent,
    EditprofessionComponent,
    AddprofessionComponent
  ],
  imports: [
    CommonModule,
    ProfessionRoutingModule,SharedModule
  ]
  
})
export class ProfessionModule { }
