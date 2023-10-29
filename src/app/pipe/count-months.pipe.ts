import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMonths'
})
export class CountMonthsPipe implements PipeTransform {

  transform(value: any): any {
    let todayDate: any = new Date();
    let val: any = new Date(value);
    const seconds = Math.abs((todayDate - val)/1000);

    const intervals: any = {
      'year' : 31536000,
      'month' : 2592000,
      'week' : 604800,
      'day' :86400,
      'hour' : 3600,
      'minute' : 60,
      'seconds' : 1,
    };

    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);

      if (counter > 0)
        if (counter === 1) {
          return counter + '' + ' ago'; //singular (1 day ago)
        } else {
          return counter +  '' + i + 's ago'; //plural (2 days ago)
        }
    }

    return null;
  }

}
