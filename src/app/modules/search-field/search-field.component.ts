import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, OnChanges {
  searchValue;
  @Input() reset: boolean;
  @Input() placeHolder: string;
  @Input() title: string;
  @Input() id: string;
  @Input() inputClass: string;
  @Input() labelClass: string;
  @Input() hint: string;
  @Input() hintClass: string;
  @Input() dataAutoId: string;
  @Output() userInput = new EventEmitter<any>();
  @Output() changes = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.reset && this.searchValue !== '') {
      this.searchValue = '';
    }
  }

  callBackFunction(e) {
    const value = e;
    if (value && value.trim() !== '') {
      this.userInput.emit(value.trim());
    } else {
      this.searchValue = '';
    }
  }

  prepareSearch(e) {
    if (this.reset) {
      this.changes.emit(false);
    }

    if (this.searchValue) {
      if (this.searchValue.trim() === '') {
        this.searchValue = '';
      } else {
        e.target.select();
      }
    }
  }

}
