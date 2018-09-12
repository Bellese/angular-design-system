import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppTableModal } from '../table-modal/table-modal.component';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})

export class AppTableData {
    @Input() data;
    @Input() dataClass;
    @Input() index;
    @Input() modalTitle;

    @Output() callBack = new EventEmitter<any>();
     
    uniqueClass = "_data";
    comp=AppTableModal
    
    constructor() {
    }
    
    ngOnInit () {
        (this.data.value.value === 'Ready to View') ? this.uniqueClass = "_ready": false;
        (this.data.value.value === 'Processing') ? this.uniqueClass = "_waiting": false;
    }
     
    buttonCallback(e) {
        this.callBack.emit(e);
    }
}
