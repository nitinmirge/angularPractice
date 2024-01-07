import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = 
[
  {path:'',component:RxjsComponent},
  {path:'takeOperater',component:TakeoperaterComponent},
  {path:'takeUntil',component:TakeuntilComponent},
  {path:'takeLast',component:TakelastoperaterComponent},
  {path:'takeWhile',component:TakewhileComponent},
  {path:'skip',component:SkipComponent},
  {path:'skiplast',component:SkiplastComponent},
  {path:'skipuntil',component:SkipuntilComponent},
  {path:'skipWhile',component:SkipwhileComponent},
  {path:'buffer',component:BufferComponent},
  {path:'startWith',component:StartwithComponent},
  {path:'endWith',component:EndwithComponent},
  {path:'defaultEmpty',component:DefaultemptyComponent},
  {path:'first',component:FirstComponent},
  {path:'map',component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
