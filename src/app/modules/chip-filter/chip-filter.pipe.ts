import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './chip-filter.model';

@Pipe({
  name: 'chipSelectFilter',
  pure: false
})
export class ChipFilterPipe implements PipeTransform {
  transform(items: ListItem[], filter: ListItem): ListItem[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: ListItem) => this.applyFilter(item, filter));
  }

  applyFilter(item: ListItem, filter: ListItem): boolean {
    if (typeof item.text === 'string' && typeof filter.text === 'string') {
      return !(
        filter.text &&
        item.text &&
        item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1 &&
          item.id
            .toString()
            .toLowerCase()
            .indexOf(filter.text.toLowerCase())
      );
    } else {
      return !(
        filter.text &&
        item.text &&
        item.text
          .toString()
          .toLowerCase()
          .indexOf(filter.text.toString().toLowerCase()) === -1 &&
          item.text
            .toString()
            .toLowerCase()
            .indexOf(filter.text.toString().toLowerCase())
      );
    }
  }
}
