import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicetypeRoutingModule } from './servicetype-routing.module';
import { ServicetypeComponent } from './page/servicetype/servicetype.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EdtservicetypeComponent } from './component/editservicetype/edtservicetype/edtservicetype.component';
import { AddservicetypeComponent } from './component/addservicetype/addservicetype/addservicetype.component';

@NgModule({
  declarations: [
    ServicetypeComponent,
    EdtservicetypeComponent,
    AddservicetypeComponent
  ],
  imports: [
    CommonModule,
    ServicetypeRoutingModule,SharedModule
  ]
})
export class ServicetypeModule { }
