import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkordertypeComponent } from './page/workordertype/workordertype.component';

const routes: Routes = [
  {path:'', component:WorkordertypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkordertypeRoutingModule { }
