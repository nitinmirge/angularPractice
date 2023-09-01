import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  data = {
    name : 'nitin',
    mobNo : 569896666,
    email : 'nitin@.com',
    pass: 'nitin$34'

  }
  submit(formData:any){
  //  console.log('--->',formData.signUp);
  console.log(formData);
  this.data=formData;
  console.log(this.data);


  }
}
