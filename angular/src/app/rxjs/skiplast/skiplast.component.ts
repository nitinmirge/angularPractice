import { Component } from '@angular/core';
import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

@Component({
  selector: 'app-skiplast',
  templateUrl: './skiplast.component.html',
  styleUrls: ['./skiplast.component.scss']
})
export class SkiplastComponent {

  constructor(){}

  ngOnInit():void{
    const source$ = of(1,2,3,4,5,6,7,8,9,10);

    source$.pipe(skipLast(5)).subscribe(value=>{
      console.log(value);
      
    })
  }
}
