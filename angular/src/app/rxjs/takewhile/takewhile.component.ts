import { Component } from '@angular/core';
import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-takewhile',
  templateUrl: './takewhile.component.html',
  styleUrls: ['./takewhile.component.scss']
})
export class TakewhileComponent {
  constructor(){}

  ngOnInit():void{

   const source$ = of(1,2,3,4,5,6,7,1,2,3,4,5);

   source$.pipe(takeWhile(ele=>ele <= 6 ,true)).subscribe(ele =>{
    console.log(ele)
    
   })
  }

}
