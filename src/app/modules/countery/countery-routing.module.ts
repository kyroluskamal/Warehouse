import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounteryComponent } from './pages/countery/countery.component';

const routes: Routes = [
{path:'' , component:CounteryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounteryRoutingModule { }
