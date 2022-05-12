import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketstatusComponent } from './pages/ticketstatus/ticketstatus.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddticketComponent } from './component/addticket/addticket.component';
import { EditticketComponent } from './component/editticket/editticket.component';

@NgModule({
  declarations: [TicketstatusComponent, AddticketComponent, EditticketComponent],
  imports: [CommonModule, TicketRoutingModule, SharedModule],
})
export class TicketModule {}
