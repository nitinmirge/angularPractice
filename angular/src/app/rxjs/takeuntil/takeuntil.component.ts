import { Component } from '@angular/core';
import { Subject, count, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-takeuntil',
  templateUrl: './takeuntil.component.html',
  styleUrls: ['./takeuntil.component.scss']
})
export class TakeuntilComponent {

  switchOff$:Subject<any> = new Subject<any>;
  onDestroy$:Subject<any> = new Subject<any>;
  constructor(){}

  ngOnInit(){

    const source$ = interval(1000);
    
    source$.pipe(takeUntil(this.switchOff$)).subscribe(count =>{
      console.log(count)
    });

    source$.pipe(takeUntil(this.onDestroy$)).subscribe(count =>{
      console.log(count)
    })
  }

  stop():void{
    this.switchOff$.next(0)
  }
  ngOnDestroy():void{
    this.onDestroy$.next(0);
    this.onDestroy$.complete();
  }
}
