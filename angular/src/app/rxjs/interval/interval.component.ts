import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {

  constructor(){}

  ngOnInit(){
    const source$ = interval(1000);
    source$.pipe(take(10)).subscribe(value =>{
      console.log(value);
      
    })
  }
}
