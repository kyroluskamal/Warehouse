import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketstatusComponent } from './pages/ticketstatus/ticketstatus.component';

const routes: Routes = [
  {path:'' , component:TicketstatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
