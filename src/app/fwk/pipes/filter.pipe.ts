import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        filter = filter ? filter.toLocaleLowerCase() : null;

        if (items) {
            return items.filter(item => item.username.toLocaleLowerCase().indexOf(filter) !== -1);
        } else {
            return items;
        }
    }
}