import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})

export class AppTableDataComponent {
    @Input() data;
    @Input() dataClass;
    @Input() index;
    @Input() searchText;
    @Input() highlightSearch;

    @Output() callBack = new EventEmitter<any>();

    buttonCallback(e) {
        this.callBack.emit({
            'event' : e,
            'button': this.data.value.instanceRef
        });
    }
}
