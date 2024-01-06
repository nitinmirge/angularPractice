import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs';
@Component({
  selector: 'app-takeoperater',
  templateUrl: './takeoperater.component.html',
  styleUrls: ['./takeoperater.component.scss']
})
export class TakeoperaterComponent {
  takeOperater:any;
  constructor(){}

  ngOnInit(){

    const source$ = interval(1000);

    source$.pipe(take(5)).subscribe(count =>{
      return this.takeOperater = count;
    })
  }

}
