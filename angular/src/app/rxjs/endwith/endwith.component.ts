import { Component } from '@angular/core';
import { interval } from 'rxjs';
// import { of } from 'rxjs';
import { count, endWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-endwith',
  templateUrl: './endwith.component.html',
  styleUrls: ['./endwith.component.scss']
})
export class EndwithComponent {
  constructor(){}

  ngOnInit():void{
    // const source$ = of(1,2,3,4,5);

    // source$.pipe(endWith(99)).subscribe(value => {
    //   console.log(value);
      
    // })

    const source2$ = interval(1000);

    source2$.pipe(take(5),endWith(999)).subscribe(count => {
      console.log(count);
      
    })
  }

}
