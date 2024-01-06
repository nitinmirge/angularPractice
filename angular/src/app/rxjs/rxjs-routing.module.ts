import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeoperaterComponent } from './takeoperater/takeoperater.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TakelastoperaterComponent } from './takelastoperater/takelastoperater.component';
import { TakewhileComponent } from './takewhile/takewhile.component';

const routes: Routes = 
[
  {path:'',component:RxjsComponent},
  {path:'takeOperater',component:TakeoperaterComponent},
  {path:'takeUntil',component:TakeuntilComponent},
  {path:'takeLast',component:TakelastoperaterComponent},
  {path:'takeWhile',component:TakewhileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
