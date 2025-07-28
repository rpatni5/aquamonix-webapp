import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate'
})
export class DatePipes implements PipeTransform {

  transform(utcSeconds: number): string {
    const date = new Date(utcSeconds * 1000);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (isToday) {
      return `Today ${timeStr}`;
    } else if (isYesterday) {
      return `Yesterday ${timeStr}`;
    } else {
      return date.toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
      }) + ', ' + timeStr;
    }
  }
}
