import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-mapto',
  templateUrl: './mapto.component.html',
  styleUrls: ['./mapto.component.scss']
})
export class MaptoComponent {
  constructor(){}

  ngOnInit(){
    const source$ = of(1,2,3,4,5);

    source$.pipe(mapTo('a')).subscribe(value =>{
      console.log(value);
      
    })
  }

}
