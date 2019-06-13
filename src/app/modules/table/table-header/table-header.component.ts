import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})

export class AppTableHeaderComponent {
    @Input() header;
    @Input() selected;
    @Output() onHeaderClick = new EventEmitter<object>();
    @Input() asc;

    getHeader(e) {
        this.asc = !this.asc;
        this.onHeaderClick.emit({e: e, asc: this.asc, header: this.header.header.el, sortServer: this.header.header.sortServer});
    }

    // sets a class of 'ascending' or 'descending'
    // only to the currently selected (clicked) header

    handleDirection() {
        if (this.asc) {
            return 'ascending';
        } else {
            return 'descending';
        }
    }

    // sets previously selected headers to a default state of false
    setDefaultDirection() {
        this.asc = true;
        return '';
    }

}
