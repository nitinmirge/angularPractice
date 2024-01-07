import { Component } from '@angular/core';
import { Observable,  of } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators'

@Component({
  selector: 'app-defaultempty',
  templateUrl: './defaultempty.component.html',
  styleUrls: ['./defaultempty.component.scss']
})
export class DefaultemptyComponent {

  constructor(){}

  ngOnInit(){
    const source$ :Observable<any> = of();
    
    source$.pipe(defaultIfEmpty(999)).subscribe(value => {
      console.log(value);
      
    })
  }

}
