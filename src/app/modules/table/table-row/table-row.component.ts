import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})

export class AppTableRow {
    @Input() dataRow;
    @Input() headers;
    @Input() index;
    @Input() rowHeader;

    @Output() onCallBack = new EventEmitter<any>();
     
    shadowArray = [];
     
    ngOnInit() {
        Object.keys(this.headers).map((key)=>{
            this.shadowArray.push(
                {
                    key: this.headers[key].header.prop, 
                    value: this.dataRow[this.headers[key].header.prop], 
                    header: this.headers[key].header.value   
                }
            ) 
        });
    }
     
    callBack(e) {
        this.onCallBack.emit(e);
    }
}