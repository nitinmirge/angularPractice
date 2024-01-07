import { Component } from '@angular/core';
import {  of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent {
  constructor(){}

  ngOnInit(){
    const source$ = of(1,2,3,4,5);

    source$.pipe(delay(5000)).subscribe(value =>{
      console.log(value);
      
    })
  }

}
