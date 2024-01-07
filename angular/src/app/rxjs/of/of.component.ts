import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {
  constructor(){}

  ngOnInit(){
    const source$ = of({name:'Nitin',lastName:'Mirge'},[1,2,3],'Hello')

    source$.subscribe(value =>{
      console.log(value);
      
    })
  }

}
