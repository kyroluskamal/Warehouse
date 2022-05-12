import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssigneeComponent } from './pages/assignee/assignee.component';

const routes: Routes = [
  {path:'', component:AssigneeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssigneeRoutingModule { }
