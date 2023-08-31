import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes =
[
  {path:'',component:AdminlandingComponent},
  {path:'adminSignin',component:AdminsigninComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
