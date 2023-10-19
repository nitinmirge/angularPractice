import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamevalidationDirective } from '../namevalidation.directive';
import { Currency1Pipe } from '../currency1.pipe';



@NgModule({
  declarations: [
    NamevalidationDirective,
    Currency1Pipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NamevalidationDirective,
    Currency1Pipe
  ]
})
export class SharedModule { }
