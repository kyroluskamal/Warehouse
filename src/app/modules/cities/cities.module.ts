import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './pages/cities/cities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddcityComponent } from './component/addcity/addcity/addcity.component';
import { EditcityComponent } from './component/editcity/editcity/editcity.component';


@NgModule({
  declarations: [
    CitiesComponent,
    AddcityComponent,
    EditcityComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    SharedModule
    
  ]
})
export class CitiesModule { }
