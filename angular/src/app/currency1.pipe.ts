import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class Currency1Pipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value*20;
  }

}
