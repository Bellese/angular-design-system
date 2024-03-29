import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class AppTextFieldComponent implements OnInit, OnChanges {
  @Input() ariaLabel: string;
  @Input() alertMessageList?: Array<string>;
  @Input() alertVariation?: string;
  @Input() title: string;
  @Input() id: string;
  @Input() required: false;
  @Input() defaultValue: string;
  @Input() inputClass: string;
  @Input() inputType = 'text';
  @Input() labelClass: string;
  @Input() hint: string;
  @Input() hintClass: string;
  @Input() errorMessage: string;
  @Input() dataAutoId: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() multiline = false;
  @Input() control: FormControl;
  @Input() formlyAttributes = {};
  @Output() keydown = new EventEmitter<any>();
  @Output() paste = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  @Output() userInput = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
    this.setDisabled();
    this.setValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setDisabled();
    }
    if (changes.defaultValue) {
      this.setValue();
    }
  }

  setValue() {
    if (this.defaultValue) {
      this.control?.setValue(this.defaultValue);
    }
  }

  setDisabled() {
    if (this.disabled) {
      this.control?.disable();
    } else {
      this.control?.enable();
    }
  }

  callBackFunction(e) {
    this.userInput.emit(e);
  }

  blurCallBackFunction(e) {
    this.blur.emit(e);
  }

  keyDownCallBackFunction(e) {
    this.keydown.emit(e);
  }

  pasteCallBackFunction(e) {
    this.paste.emit(e);
  }
}
