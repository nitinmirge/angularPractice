import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { DataService } from 'src/app/adminsignup/data.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent {
  studentDataForm!:FormGroup; //form declaration
  studentData : any = {
    name:'nitin',
    id:444,
    address:'jjjj',
  };
  formData:any;
  fName : string = "Nitin mirge";
  today: Date = new Date()
  constructor(private formBuilder:FormBuilder,private dataService:DataService){

  }

  ngOnInit(){
    this.studentDataFormValidations();
  }

  studentDataFormValidations(){
    this.studentDataForm = this.formBuilder.group({
      studentName : ['',[Validators.required,Validators.maxLength(5),this.dataService.nameValidation,this.dataService.whiteSpaceValidator]],
      gender:[''],
      mobNo :[''],
      cityName:[''],
      painting:[''],
      dancing:[''],
      reading:[''],
      outing:[''],
      temsAndCond:['',[Validators.requiredTrue]],
      dob:['']
    })
   }

   submitFormData() {
    
    this.formData = this.studentDataForm.value;
    console.log('form', this.formData);
    let date = this.formData.date?.split('-').reverse().join('-');
    console.log(date);
    let name1 =  this.formData.studentName.trim()
    console.log(name1);
    let name =  name1.toUpperCase();
    console.log(name);
    // this.dataService.city = "Pune"
    console.log(this.studentDataForm.value.cityName);
    //set the city property
    this.dataService.city = this.studentDataForm.value.cityName;//direct value assigner

    this.dataService.setCityName(this.studentDataForm.value.cityName)//setter method


   }
}
