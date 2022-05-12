import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicepriceComponent } from './page/serviceprice/serviceprice.component';

const routes: Routes = [
  {path:"" , component:ServicepriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicepriceRoutingModule { }
