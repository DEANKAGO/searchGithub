import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMonths'
})
export class CountMonthsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
