import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { FilterPipe } from '../../../pipes/filter.pipe'

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
    @Input() total;
    @Input() linearScore;
    @Input() reportingPeriod;
    @Input() highlightSearch: boolean = true;
    @Output() buttonClick = new EventEmitter<any>();
    @Output() tableRowsFiltered = new EventEmitter<any>();
    @Output() paginateNext = new EventEmitter<any>();
    headerLength;
    headerEvent;
    selected;
    p: number;
    rowHeader = 'row Header';
    asc: boolean = false;
    indexArray = [];
    displayRows;
    
    constructor(private filter: FilterPipe) {
    }
    
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
    
    ngOnChanges(changes: SimpleChanges) {
        if (changes.searchText) {
            this.displayRows = this.filter.transform(this.dataRows, this.searchText);
            (this.displayRows[0]) ? this.tableRowsFiltered.emit(this.displayRows.length) : this.tableRowsFiltered.emit(0);
        } else {
            this.displayRows = this.dataRows;
            this.tableRowsFiltered.emit(this.displayRows.length);
        }
    }

    passPage(e) {
        this.p = e;
        this.paginateNext.emit(this.p);
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