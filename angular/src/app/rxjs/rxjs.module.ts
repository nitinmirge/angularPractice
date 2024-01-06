import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { TakeoperaterComponent } from './takeoperater/takeoperater.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { RxjsComponent } from './rxjs/rxjs.component';

console.log('rxjs module load');

@NgModule({
  declarations: [
    TakeoperaterComponent,
    TakeuntilComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
