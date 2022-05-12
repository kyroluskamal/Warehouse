import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';


import { EditwarehouseComponent } from './component/editwarehouse/editwarehouse/editwarehouse.component';
import { AddwarehouseComponent } from './component/addwarehouse/addwarehouse/addwarehouse.component';
import { WarehouseComponent } from './page/warehouse/warehouse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddmapComponent } from './component/map/addmap/addmap.component';
@NgModule({
  declarations: [

    EditwarehouseComponent,
    AddwarehouseComponent,
    WarehouseComponent,
    AddmapComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,SharedModule
  ]
})
export class WarehouseModule { }
