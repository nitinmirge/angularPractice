import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() parentData : any; //decler property to get data from parent

  @Output() childData = new EventEmitter<any>; // define property to send data from child to parent

  dataFromChildToParent(value:any){
    this.childData.emit(value);
  }
}
