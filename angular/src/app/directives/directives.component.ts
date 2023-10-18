import { Component } from '@angular/core';
import { CommondataService } from '../commondata.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  show_content : boolean = true;
  list = ['panir','kaju-kurma','icecream','veg kolhapuri','palak panir'];
  show_list: boolean = false;
  gettingMarksOnClick?:number;
  gettingMarksOnInit?:number;
  color?: string = 'orange'
  noColor:boolean = false;
  textColor = 'blue';
  fontSize = '30px';
  myName!:string;
  firstName = 'raj'
  headerContent = 'para';
  headerContent1 = 'para1';
  dynamicClass = false;
  dynamicClass2 = false;
  dynamicClass3 =true;

  constructor(private commonDataService:CommondataService){

  }
  //to fetch data from service u either go with onInit:if want to get or set data on page load or go with functions:if want to get or set data on events
  ngOnInit(){//Lifecycle hook : (fuction which implicitly get called by compiler ) used to fetch services properties
     this.gettingMarksOnInit = this.commonDataService.marks;
    //  this.headerContent = 'para'
  }
  showContent(){
     this.show_content = false;
  }
  showList(){
    this.show_list = true;
    this.gettingMarksOnClick = this.commonDataService.marks;
  }
  hideList(){
    this.show_list = false;
  }
  switchDirective(){
    this.noColor=true
   this.color = 'blue'
  }
  dynamicCls(){
    return 'para';
  }
}
