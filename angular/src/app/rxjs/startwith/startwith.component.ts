import { Component } from '@angular/core';
import { of } from 'rxjs';
// import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.scss']
})
export class StartwithComponent {
  constructor(){}

  ngOnInit(){
    // const source$ = interval(1000);

    // source$.pipe(startWith(100)).subscribe(value => {
    //   console.log(value)
    // })

     const source2$ = of(1,2,3,4,5,6);

     source2$.pipe(startWith(-5)).subscribe(value => {
      console.log(value);
      
     })
  }

}
