import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(items: any, searchText: any, highlight: boolean): any {
    if (!items) {
      return '';
    }
    if (!searchText) {
      return items;
    }
    if (!highlight) {
      return items;
    }

    const thisSearch = searchText.toLowerCase().trim();

    if (items.toLowerCase().includes(thisSearch)) {
      const reg = new RegExp(thisSearch.includes('.') ? thisSearch.replace('.', '\\.') : thisSearch, 'i');

      const exp = '<mark>' + items.match(reg)[0] + '</mark>';
      const newItem = items.replace(reg, exp);

      return this._sanitizer.bypassSecurityTrustHtml(newItem);
    } else {
      return items;
    }
  }
}
