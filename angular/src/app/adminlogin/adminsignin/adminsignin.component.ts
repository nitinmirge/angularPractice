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

  constructor(private formBuilder:FormBuilder,private dataService:DataService){

  }

  ngOnInit(){
    this.studentDataFormValidations();
  }

  studentDataFormValidations(){
    this.studentDataForm = this.formBuilder.group({
      studentName : ['',[Validators.required,Validators.maxLength(5),this.nameValidation,this.whiteSpaceValidator]],
      gender:[''],
      mobNo :[''],
      painting:[''],
      dancing:[''],
      reading:[''],
      outing:[''],
      temsAndCond:['',[Validators.requiredTrue]],
      dob:['']
    })
   }
   //Copy cOpy coPy copy copY
   nameValidation(control:FormControl):any{
    console.log("control",control.value);//copy
    let nameValue = control.value;
    let updateNewValue = nameValue?.toLowerCase();
    let isInclude = updateNewValue?.includes('copy','hello','the');
    return isInclude ? {isValid:true} : null;
    }
    whiteSpaceValidator(inpFeildData:FormControl){
      let nameValue = inpFeildData.value;
      let trimedValue = nameValue.trim().length > 0;
      return trimedValue ? null :{whiteSpace : true};
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


   }
}
