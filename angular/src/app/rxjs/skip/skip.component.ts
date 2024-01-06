import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent {
  constructor(){}

  ngOnInit():void{
    const source$ = interval(1000);

    source$.pipe(skip(5)).subscribe(value =>{
      console.log(value);
      
    })
  }

}
