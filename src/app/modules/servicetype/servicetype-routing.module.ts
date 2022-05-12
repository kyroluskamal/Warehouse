import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicetypeComponent } from './page/servicetype/servicetype.component';

const routes: Routes = [
  {path:'', component:ServicetypeComponent},
  {path:'servicestypes', component:ServicetypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicetypeRoutingModule { }
