import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickettwoRoutingModule } from './tickettwo-routing.module';
import { AddtickettwoComponent } from './component/addtickettwo/addtickettwo/addtickettwo.component';
import { EdittickettwoComponent } from './component/edit tickettwo/edittickettwo/edittickettwo.component';
import { TickettwoComponent } from './page/tickettwo/tickettwo.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddtickettwoComponent,
    EdittickettwoComponent,
    TickettwoComponent
  ],
  imports: [
    CommonModule,
    TickettwoRoutingModule,SharedModule,
  ]
})
export class TickettwoModule { }
