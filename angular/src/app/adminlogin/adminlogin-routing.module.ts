import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';

const routes: Routes =
[
  {path:'',component:AdminlandingComponent},
  {path:'adminSignin',component:AdminsigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
