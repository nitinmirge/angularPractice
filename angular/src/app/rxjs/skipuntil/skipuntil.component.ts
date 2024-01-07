import { Component,OnInit } from '@angular/core';
import { interval,Subject } from 'rxjs';
import { skipUntil } from 'rxjs/operators';
@Component({
  selector: 'app-skipuntil',
  templateUrl: './skipuntil.component.html',
  styleUrls: ['./skipuntil.component.scss']
})
export class SkipuntilComponent implements OnInit {
  count = 0;
  switchOn$ : Subject<any> = new Subject<any>;
  constructor(){}

  ngOnInit():void{
  
    const source$ = interval(1000);

    source$.pipe(skipUntil(this.switchOn$)).subscribe(value =>{
      this.count = value;
    })
  }
  on(){
    this.switchOn$.next(0)
  }

}
