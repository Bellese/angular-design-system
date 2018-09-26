import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class AppTextField {
    @Input() title;
    @Input() id;
    @Input() inputClass;
    @Input() labelClass;
    @Input() hint;
    @Input() hintClass;
    @Output() userInput = new EventEmitter<any>();
    
    constructor() { }
    
    callBackFunction(e) {
        this.userInput.emit(e);
    }
}
