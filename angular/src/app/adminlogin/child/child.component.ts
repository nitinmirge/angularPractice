import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/adminsignup/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() parentData : any; //decler property to get data from parent

  @Output() childData = new EventEmitter<any>; // define property to send data from child to parent

  data = 'flower';
  showSubComp = false;

  constructor(private dataService : DataService){}
  dataFromChildToParent(value:any){
    this.childData.emit(value);
  }

  ngOnInit(){
    console.log('ngOnInit....');
    
  }

  ngOnChanges(){
    console.log('ngOnChanges....');
    
  }

  subjectData(){
    this.showSubComp = true;
    this.dataService.data.next(this.data);
  }
 
}
