import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'graphToolTip'
})

export class GraphToolTipPipe implements PipeTransform {

    transform(items: any): any {

        if (items === '') {
            return 'N/A';
        } else {
            return items;
        }
    }
}