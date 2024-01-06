import { Component } from '@angular/core';
import {  of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-takelastoperater',
  templateUrl: './takelastoperater.component.html',
  styleUrls: ['./takelastoperater.component.scss']
})
export class TakelastoperaterComponent {

  constructor(){}

  ngOnInit():void{

    const source$ = of(1,2,3,4,5,6,7,8,9,10);

    source$.pipe(takeLast(3)).subscribe(a =>{
      console.log(a);
      
    })
  }
}
