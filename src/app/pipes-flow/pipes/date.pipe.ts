import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date',
})
export class AppDatePipe implements PipeTransform {

    constructor(private date: DatePipe) {}

    transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string | null;
    transform(value: null | undefined, format?: string, timezone?: string, locale?: string): null;
    transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
        const myBasicFormatDate = 'MMM d, YYYY hh:mm';
        const formattedDate = 
            this.date.transform(value, format || myBasicFormatDate, timezone, locale);
            
        return '❤️ ' + formattedDate + ' ❤️';
    }
}
