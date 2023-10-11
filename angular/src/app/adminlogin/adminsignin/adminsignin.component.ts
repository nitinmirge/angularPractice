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
    name:'nitin',
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
      studentName : [this.studentData.name,[Validators.required,Validators.maxLength(5),this.nameValidation,this.whiteSpaceValidator]],
      gender:[],
      mobNo :[''],
      painting:[],
      dancing:[],
      reading:[],
      outing:[],
      temsAndCond:['',[Validators.requiredTrue]],
      dob:['']
    })
   }
   nameValidation(control:FormControl):any{
    console.log("control",control.value);//copy
    let nameValue = control.value;
    let updateNewValue = nameValue?.toUpperCase();
    let isInclude = updateNewValue?.isInclude('copy');
    return isInclude ? {isValid:true} : null;
    }
    whiteSpaceValidator(inpFeildData:FormControl){
      let nameValue = inpFeildData.value;
      let trimedValue = nameValue.trim().length > 0;
      return trimedValue ? null :{whiteSpace : true};
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
