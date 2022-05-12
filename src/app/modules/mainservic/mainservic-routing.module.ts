import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainserviceComponent } from './page/mainservice/mainservice.component';

const routes: Routes = [
  {path:"" , component:MainserviceComponent}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainservicRoutingModule { }
