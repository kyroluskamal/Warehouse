import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsertypeComponent } from './page/usertype/usertype.component';

const routes: Routes = [
  {path:'' , component:UsertypeComponent},
  {path:'usertypes' , component:UsertypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsertypeRoutingModule { }
