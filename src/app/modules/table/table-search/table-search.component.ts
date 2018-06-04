import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})

export class AppTableSearch {
    @Input() headers;
    @Input() dataRows;
    @Output() onSearchText = new EventEmitter<any>();
    
    searchText(e) {
        this.onSearchText.emit(e.target.value);
    }

}