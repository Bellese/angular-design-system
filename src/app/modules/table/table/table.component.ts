import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked, OnChanges } from '@angular/core';

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
    @Output() tableRowsFiltered = new EventEmitter<any>();
    headerLength;
    headerEvent;
    selected;
    p: number;
    rowHeader = 'row Header';
    asc: boolean = false;
    indexArray = [];
    
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
    
    ngOnChanges() {
        if (this.searchText) {
            this.searchText = this.searchText.toLowerCase().trim();
            //always convert to lowercase to and remove any leading or ending white spaces

            this.indexArray = [""];
            //dump the indexarray so that each search is a fresh array
            //even though it fills first position in the array w/ quotes, the filter wont read the first position, since it reads 0 as false and wont return anything even if it were true

            this.dataRows.map((x, ind) => {
                Object.keys(x).map((key)=>{
                    if (x[key].value.toString().toLowerCase().includes(this.searchText) && this.indexArray.indexOf(ind) == -1 ) {
                        this.indexArray.push(ind);
                    }
                })
            })
            
            this.tableRowsFiltered.emit(this.indexArray.length - 1);
        } else {
            let totalRows = 0;
            this.dataRows.map((x, ind) => {
                totalRows++;
            })
             this.tableRowsFiltered.emit(totalRows);
        }
    }

    passPage(e) {
        this.p = e;
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