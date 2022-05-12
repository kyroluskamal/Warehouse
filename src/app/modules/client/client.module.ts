import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './page/client/client.component';
import { AddclientComponent } from './component/addclient/addclient/addclient.component';
import { EditclientComponent } from './component/editclient/editclient/editclient.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientDetailsComponent } from './component/client-details/client-details.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    ClientComponent,
    AddclientComponent,
    EditclientComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,SharedModule, MenuModule,
    RippleModule,
    ButtonModule,MatMenuModule
  ]
})
export class ClientModule { }
