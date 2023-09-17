import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent {
  studentDataForm!:FormGroup; //form declaration
  studentData : any = {
    name:'pooja',
    id:444,
    address:'jjjj',
  };
  formData:any;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(){
    this.studentDataFormValidations();
  }

  studentDataFormValidations(){
    this.studentDataForm = this.formBuilder.group({
      studentName : ['nitin',Validators.required],
      gender:[],
      mobNo :[''],
      painting:[],
      dancing:[],
      reading:[],
      outing:[],
      temsAndCond:['',[Validators.requiredTrue]],
      dob:[]
    })
   }
   submitFormData(value:any) {
    this.formData = value;
    console.log(value);
    let date = this.formData.date?.split('-').reverse().join('-');
    console.log(date);
    let name1 =  this.formData.studentName.trim()
    console.log(name1);
    let name =  name1.toUpperCase();
    console.log(name);


   }
}
