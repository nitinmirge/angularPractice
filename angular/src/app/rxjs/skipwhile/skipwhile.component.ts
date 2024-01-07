import { Component } from '@angular/core';
import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skipwhile',
  templateUrl: './skipwhile.component.html',
  styleUrls: ['./skipwhile.component.scss']
})
export class SkipwhileComponent {
  constructor(){}

  ngOnInit():void{

    const source$ = of(1,2,3,4,5,6,1,2,3,4,5,1,2,3);

    source$.pipe(skipWhile(value => value <= 5)).subscribe(value => {
      console.log(value)
    })
  }

}
