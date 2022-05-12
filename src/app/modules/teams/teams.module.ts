import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './pages/teams/teams.component';
import { AddteamComponent } from './component/addteam/addteam/addteam.component';
import { EditteamComponent } from './component/editteam/editteam/editteam.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeamsComponent,
    AddteamComponent,
    EditteamComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,SharedModule
  ]
})
export class TeamsModule { }
