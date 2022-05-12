import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeworderComponent } from './page/neworder/neworder.component';

const routes: Routes = [
  {path:'', component:NeworderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeworderRoutingModule { }
