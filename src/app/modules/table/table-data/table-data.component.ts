import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})

export class AppTableData {
    @Input() data;
    @Input() dataClass;
    @Input() index;
    @Input() buttonFocus;
    @Output() onOpenModal = new EventEmitter<object>();
    uniqueClass = "_data";
    
    constructor() {
    }
    
    ngOnInit () {
        (this.data.value.value === 'Ready to View') ? this.uniqueClass = "_ready": false;
        (this.data.value.value === 'Processing') ? this.uniqueClass = "_waiting": false;
    }
    
    openModal(e) {
        this.onOpenModal.emit({"e":this.index, "colHeader": this.data.header, "data": this.data.value});
    }
}
