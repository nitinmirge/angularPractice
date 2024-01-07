import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { TakeoperaterComponent } from './takeoperater/takeoperater.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TakelastoperaterComponent } from './takelastoperater/takelastoperater.component';
import { TakewhileComponent } from './takewhile/takewhile.component';
import { SkipComponent } from './skip/skip.component';
import { SkiplastComponent } from './skiplast/skiplast.component';
import { SkipuntilComponent } from './skipuntil/skipuntil.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';

console.log('rxjs module load');

@NgModule({
  declarations: [
    TakeoperaterComponent,
    TakeuntilComponent,
    RxjsComponent,
    TakelastoperaterComponent,
    TakewhileComponent,
    SkipComponent,
    SkiplastComponent,
    SkipuntilComponent,
    SkipwhileComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
