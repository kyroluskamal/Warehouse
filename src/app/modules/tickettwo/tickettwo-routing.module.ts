import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TickettwoComponent } from './page/tickettwo/tickettwo.component';

const routes: Routes = [
  {path:'', component:TickettwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TickettwoRoutingModule { }
