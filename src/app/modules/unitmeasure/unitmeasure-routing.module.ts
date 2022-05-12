import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './page/unit/unit.component';

const routes: Routes = [
  {path:'', component:UnitComponent},
  {path:'unitmeasurement', component:UnitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitmeasureRoutingModule { }
