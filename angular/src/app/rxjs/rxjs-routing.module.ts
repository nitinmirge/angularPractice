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
  {path:'skipWhile',component:SkipwhileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
