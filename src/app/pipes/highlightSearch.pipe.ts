import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'highlightSearch'
})

export class HighlightSearchPipe implements PipeTransform {
    
    constructor(private _sanitizer:DomSanitizer) {
    }
    
    transform(items: any, searchText: any, highlight: boolean): any {
        
        if(!items) return "";
        if(!searchText) return items;
        if(!highlight) return items;
        
        let thisSearch = searchText.toLowerCase().trim();
        
        if(items.toLowerCase().includes(thisSearch)) {

            var reg = new RegExp(thisSearch.includes(".") ? thisSearch.replace(".", "\\.") : thisSearch, "\i");

            var exp = '<mark>' + items.match(reg)[0] + '</mark>';
            var newItem = items.replace(reg, exp)
            
            return this._sanitizer.bypassSecurityTrustHtml(newItem);
        } else {
            return items;
        }     
    }
}