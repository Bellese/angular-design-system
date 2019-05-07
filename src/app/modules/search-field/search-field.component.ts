import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Input() searchValue: string;
  @Input() placeHolder: string;
  @Input() title: string;
  @Input() id: string;
  @Input() inputClass: string;
  @Input() labelClass: string;
  @Input() hint: string;
  @Input() hintClass: string;
  @Input() dataAutoId: string;
  @Output() userInput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  callBackFunction(e) {
    const value = e;
    if (value && value.trim() !== '') {
      this.userInput.emit(value.trim());
    }
  }

  prepareSearch(e) {
    if (this.searchValue) {
      if (this.searchValue.trim() === '') {
        this.searchValue = '';
      } else {
        e.target.select();
      }
    }
  }

}
