import { Component } from '@angular/core';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  constructor(){}

  ngOnInit(){
    const source$ = of(1,2,3,4,5,6);

    source$.pipe(first()).subscribe(value =>{
      console.log(value);
      
    })
  }

}
