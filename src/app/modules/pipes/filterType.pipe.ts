import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'filterType'
})

export class FilterTypepipe implements PipeTransform {
    specialClass;
    
    constructor(private _sanitizer:DomSanitizer) {
    }
    
    transform(items: any): any {
        
        if(!items) return "";
        
        //add to switch case the different bases needed
        return this._sanitizer.bypassSecurityTrustHtml(this.specialClass);
        
    }
}