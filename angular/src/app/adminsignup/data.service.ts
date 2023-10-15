import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   city:string="Mumbai"
   city2?:string;
  constructor() { }

     //Copy cOpy coPy copy copY
     nameValidation(control:FormControl):any{
      console.log("control",control.value);//copy
      let nameValue = control.value;
      let updateNewValue = nameValue?.toLowerCase();
      let isInclude = updateNewValue?.includes('copy','hello','the');
      return isInclude ? {isValid:true} : null;
      }
      //validation without valid input value
      whiteSpaceValidator(inpFeildData:FormControl){
        let nameValue = inpFeildData.value;
        let trimedValue = nameValue.trim().length > 0;
        return trimedValue ? null :{whiteSpace : true};
      }

      setCityName(value:any){
          this.city2 = value;
      }
      getCityName(){
         return this.city2
      }
}
