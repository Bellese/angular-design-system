import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { FilterPipe } from '../../../pipes/filter.pipe'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class AppTable {
    @Input() tableClass;
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
    @Output() sortServer = new EventEmitter<any>();
    
    headerLength;
    headerEvent;
    selected;
    p: number;
    rowHeader = 'row Header';
    asc: boolean = false;
    indexArray = [];
    displayRows;
    sortCallback={};
    
    constructor(private filter: FilterPipe) {
    }
    
    //refactor to have one function that emits for pagination, sorting and searching in server. since they all have to move together. 
    
    ngOnInit() {
        this.headerLength = this.headers.length;
        this.headers.map(x => {
            if (x.header.attr) {
                if (x.header.attr === 'asc') {
                    this.asc = true;
                } else if (x.header.attr === 'des') {
                    this.asc = false;
                }
                this.selected = x.header.prop;
                (!x.header.sortServer) ? this.headerEvent = {name: true, id: x.header.prop, asc: this.asc} : null;
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
        this.paginateNext.emit({
            page: this.p, 
            sort: this.sortCallback
        });
    }

    passHeaderEvent(e) {
        if (e.header === "sort") {
            this.selected = e.e.target.id;
            (!e.sortServer) ? this.headerEvent = e : false;
            this.sortCallback = {
                name: e.e.target.innerText,
                target: this.selected,
                asc: e.asc
            }
            
            this.sortServer.emit(this.sortCallback);
        }
    }
     
    callBack(e) {
        this.buttonClick.emit(e);
    }
}