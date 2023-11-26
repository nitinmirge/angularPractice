import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from '../shared/shared.module';
import { NumbersonlyDirective } from './numbersonly.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubjecttestComponent } from './subjecttest/subjecttest.component';

 console.log('adminLogin module');

@NgModule({
  declarations: [
    AdminsigninComponent,
    AdminlandingComponent,
    NotfoundComponent,
    NumbersonlyDirective,
    ParentComponent,
    ChildComponent,
    SubjecttestComponent
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:
  [
    //AdminsigninComponent //to eccess in other modules
  ]
})
export class AdminloginModule { }
