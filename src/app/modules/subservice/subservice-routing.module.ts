import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubserviceComponent } from './page/subservice/subservice.component';

const routes: Routes = [
  {path:'', component:SubserviceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubserviceRoutingModule { }
