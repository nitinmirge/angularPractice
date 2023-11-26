import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { SubjecttestComponent } from './subjecttest/subjecttest.component';

const routes: Routes =
[
  {path:'',component:AdminlandingComponent},
  {path:'adminSignin',component:AdminsigninComponent},
  {path:'parent',component:ParentComponent},
  {path:'subject',component:SubjecttestComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
