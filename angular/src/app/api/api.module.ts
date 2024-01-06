import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIRoutingModule } from './api-routing.module';
import { APIComponent } from './api.component';


@NgModule({
  declarations: [
    APIComponent
  ],
  imports: [
    CommonModule,
    APIRoutingModule
  ]
})
export class APIModule { }
