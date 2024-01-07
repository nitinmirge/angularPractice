import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {
  constructor(){}

  ngOnInit(){
    const source$ = interval(1000);

    source$.pipe(timeout(900)).subscribe(value =>{
      console.log(value);
      
    })
  }

}
