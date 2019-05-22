import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})

export class FilterPipe implements PipeTransform {
    indexArray = [];
    // create the array to hold every row index that has a matching value in the column

    transform(items: any[], searchText: string): any[] {

        if (!items) { return []; }
        if (!searchText) { return items; }

        searchText = searchText.toLowerCase().trim();
        // always convert to lowercase to and remove any leading or ending white spaces

        this.indexArray = [""];
        // dump the indexarray so that each search is a fresh array
        // even though it fills first position in the array w/ quotes, the filter wont read the first position, 
        // since it reads 0 as false and wont return anything even if it were true

        items.map((x, ind) => {
            Object.keys(x).map((key) => {
                if (x[key].value.toString().toLowerCase().includes(searchText) && this.indexArray.indexOf(ind) == -1 ) {
                    this.indexArray.push(ind);
                }
            });
        });
        // search through the items array passed, and find any values matching search text, save the index of that value in array

        // add protype to return the count of rows available from search

        // if(this.indexArray.length == 1) return items;
        if (this.indexArray.length > 1) {
            return (items).filter( (it, ind) => {
                return (this.indexArray.indexOf(ind) > -1) ? this.indexArray.indexOf(ind) : false;
            });
        } else {
           return [false];
        }
        // this filter is where the magic happens, it will remove rows that dont have an index matching an index in the indexarray
    }
}