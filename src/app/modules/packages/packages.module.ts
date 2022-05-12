import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackageComponent } from './pages/package/package.component';
import { EditpackageComponent } from './component/editpackage/editpackage/editpackage.component';
import { AddpackageComponent } from './component/addpackage/addpackage/addpackage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PackageComponent,
    EditpackageComponent,
    AddpackageComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,SharedModule
  ]
})
export class PackagesModule { }
