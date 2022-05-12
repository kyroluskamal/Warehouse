import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './page/warehouse/warehouse.component';

const routes: Routes = [
  {path:'', component:WarehouseComponent, data:{titulo:'Warehouse'}},
  // {path:'warehouse', component:WarehouseComponent, data:{titulo:'Warehouse'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
