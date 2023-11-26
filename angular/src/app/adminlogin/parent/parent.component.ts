import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  inputBoxValue : any;
  dataFromChild : any;
  dataFromParentToChild(value:any){
    console.log('parentvalue',value);
    this.inputBoxValue = value;
    
  }

  dataFethingFromClild(value:any){
   this.dataFromChild = value;
  }
}
