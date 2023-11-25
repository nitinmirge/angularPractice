import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumbersonly]'
})
export class NumbersonlyDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('input',['$event'])
  onInputChange(){
    console.log('innnnnn....');
    let value =this.elementRef.nativeElement.value;
    console.log(value);
    this.elementRef.nativeElement.value=value.replace(/[^0-9]/g,'')
    
  }

}
