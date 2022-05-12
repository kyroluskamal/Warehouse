import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionComponent } from './page/profession/profession.component';

const routes: Routes = [

{path:'', component:ProfessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionRoutingModule { }
