import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class AppTable {
    @Input() index;
    @Input() headers;
    @Input() dataRows;
    @Input() tableSummary;
    @Input() tableTitle;
    @Input() paginate;
    @Input() searchText: string ="";
    @Input() starRating;
    @Input() maxRows;
    @Input() linearScore;
    @Input() reportingPeriod;
    @Input() highlightSearch: boolean = true;
    @Output() buttonClick = new EventEmitter<any>();
    headerLength;
    headerEvent;
    selected;
    p: number;
    rowHeader = 'row Header';
    asc: boolean = false;
    
    ngOnInit() {
        this.headerLength = this.headers.length;
        this.headers.map(x => {
            if (x.header.attr) {
                if (x.header.attr === 'asc') {
                    this.asc = true;
                    this.headerEvent = {name: true, id: x.header.prop, asc: this.asc};
                    this.selected = x.header.prop
                } else if (x.header.attr === 'des') {
                    this.asc = false;
                    this.headerEvent = {name: true, id: x.header.prop, asc: this.asc};
                    this.selected = x.header.prop
                }
            }
        });
    }

    passPage(e) {
        this.p = e;
    }

    SearchText(value) {
        this.searchText = value;
    }

    passHeaderEvent(e) {
        if (e.header === "sort") {
            this.headerEvent = e
            this.selected = e.e.target.id
        }
    }
     
    callBack(e) {
        this.buttonClick.emit(e);
    }
}