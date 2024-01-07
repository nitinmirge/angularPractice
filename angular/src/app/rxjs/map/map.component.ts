import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { from } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor() { }

  ngOnInit() {
    const source$ = of(1, 2, 3, 4, 5, 6);

    source$.pipe(map(value => {
      return value * 12;
    })).subscribe(value => {
      console.log(value);

    })

    // const users =
    // [
    //   {id:1, firstName:'Nitin', lastName:'mirge'},
    //   {id:2, firstName:'sachin', lastName:'mirge'},
    //   {id:3, firstName:'om', lastName:'mirge'},
      
    // ];

    // const source$ = from(users);

    // source$.pipe(map(value => {
    //   return 
      
    //   {
    //     id : value.id,
    //     fullName : `${value.firstName} ${value.lastName}`
    //   }
    // })).subscribe(value =>{
    //   console.log(value);
      
    // })
  }

}
