import { Component } from '@angular/core';
import {  of } from 'rxjs';
import { last } from 'rxjs/operators';
@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent {
  constructor(){}
  ngOnInit(){
    // const source$ = of(1,2,3,4,5);
    
    // source$.pipe(last()).subscribe(value =>{
    //   console.log(value);
      
    // })

    const source$ = of(1,2,3,4,5);

    source$.pipe(last(value =>{
      return value % 2 === 0
    },'no value found')).subscribe(value =>{
      console.log(value);
      
    })
  }

}
