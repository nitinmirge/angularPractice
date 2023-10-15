import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  city?:string;
  data = {
    name : 'nitin',
    mobNo : 569896666,
    email : 'nitin@.com',
    pass: 'nitin$34'

  }
  data2:any
  city2?:string;
//   submit(formData?:any){
//   //  console.log('--->',formData.signUp);
//   console.log(formData);
//   this.data=formData;
//   console.log(this.data);
// }

constructor(private dataService:DataService){}

ngOnInit(){
  this.city = this.dataService.city;//to get city propertys value
  console.log('city',this.city);
  this.city2 = this.dataService.getCityName();//to get city2 propertys value by calling getter function
  console.log('city2-->',this.city2);
  
}
submit(formData? : any){
  //console.log('-->',formData.signUp);
  console.log(formData);
  this.data2 = formData;
  console.log(this.data);

}

}
