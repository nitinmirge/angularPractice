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
import { BufferComponent } from './buffer/buffer.component';
import { StartwithComponent } from './startwith/startwith.component';
import { EndwithComponent } from './endwith/endwith.component';
import { DefaultemptyComponent } from './defaultempty/defaultempty.component';
import { FirstComponent } from './first/first.component';
import { MapComponent } from './map/map.component';
import { MaptoComponent } from './mapto/mapto.component';
import { LastComponent } from './last/last.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';

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
    SkipwhileComponent,
    BufferComponent,
    StartwithComponent,
    EndwithComponent,
    DefaultemptyComponent,
    FirstComponent,
    MapComponent,
    MaptoComponent,
    LastComponent,
    FromComponent,
    OfComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
