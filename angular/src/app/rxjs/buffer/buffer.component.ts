import { Component } from '@angular/core';
import { interval,Subject } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent {
  switch$:Subject<any> = new Subject<any>
  constructor(){}

  ngOnInit(){
    const source$ = interval(250);

    source$.pipe(buffer(this.switch$)).subscribe(value => {
      console.log(value);
      
    })
  }

  release(){
    this.switch$.next(0);
  }
}
