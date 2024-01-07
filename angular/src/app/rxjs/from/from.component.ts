import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {

  constructor(){}

  ngOnInit(){
    // const source$ = from([1,2,3,4,5]);

    // source$.subscribe(value =>{
    //   console.log(value);
      
    // })

    // const source$ = from("hello word!");
    
    // source$.subscribe(value =>{
    //   console.log(value);
      
    // })

    const contries = new Map();

    contries.set('in','india');
    contries.set('np','nepal');
    contries.set('sl','shrilanka')

    const source$ = from(contries);

    source$.subscribe(value =>{
      console.log(value);
      
    })
  }
}
