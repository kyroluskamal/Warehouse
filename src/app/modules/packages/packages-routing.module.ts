import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageComponent } from './pages/package/package.component';

const routes: Routes = [
  {path:'',component:PackageComponent},
  // {path:'package',component:PackageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
