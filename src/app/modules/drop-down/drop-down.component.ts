import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class AppDropDownComponent implements OnInit, OnChanges {
  @Input() options;
  @Input() labelName: string;
  @Input() labelClass: string;
  @Input() selectClass: string;
  @Input() ariaLabel: string;
  @Input() id = 1;
  @Input() defaultSelected = 0;
  @Input() defaultSelectedValue: string = null;
  @Input() hintMessage: string;
  @Input() errorMessage: string;
  @Input() error: boolean;
  @Input() dataAutoId: string;
  @Input() disabled: boolean;
  @Input() control: FormControl;
  @Input() formlyAttributes = {};
  @Input() alertMessageList?: Array<string>;
  @Input() alertVariation?: string;
  @Output() selectedOption = new EventEmitter<any>();

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
    // now that reactive forms are in use, additional form field attributes have to be integrated with the form control
    this.setSelectedValue();
    this.setDisabled();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setDisabled();
    }
    if (changes.defaultSelectedValue || changes.defaultSelected) {
      this.setSelectedValue();
    }
  }

  setSelectedValue() {
    if (this.defaultSelectedValue !== null) {
      this.control?.setValue(this.defaultSelectedValue);
    } else if (this.defaultSelected !== null) {
      this.control?.setValue(this.options[this.defaultSelected].value);
    }
  }

  setDisabled() {
    if (this.disabled) {
      this.control?.disable();
    } else {
      this.control?.enable();
    }
  }

  selectOption(e) {
    const selectedValue = e.target.value;
    this.defaultSelectedValue = selectedValue;
    this.defaultSelected = this.options.findIndex((option) => option.value === selectedValue);

    this.selectedOption.emit(selectedValue);
  }
}
