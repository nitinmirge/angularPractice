import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { NotfoundComponent } from './notfound/notfound.component';

 console.log('adminLogin module');

@NgModule({
  declarations: [
    AdminsigninComponent,
    AdminlandingComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
  [
    //AdminsigninComponent //to eccess in other modules
  ]
})
export class AdminloginModule { }
