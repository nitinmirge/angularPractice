import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  constructor(){}

  ngOnInit(){
    const source$ = timer(5000,250);

    source$.subscribe(value =>{
      console.log(value);
      
    })
  }

}
