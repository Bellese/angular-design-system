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
  @Input() ariaLabelledby: string;
  @Input() id: string | number = 1;
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

  attr: any;

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
    // now that reactive forms are in use, additional form field attributes have to be integrated with the form control
    this.setSelectedValue();
    this.setDisabled();
    this.setAttributes();
  }

  // Set attributes for elements which can't be used as-is from Inputs
  setAttributes() {
    const selectId = `dropdown-${this.id}`;
    const labelId = this.labelName ? `${selectId}-label` : null;

    // If a label is defined, the select should use aria-labelledby instead of aria-label
    // so that the screen reader doesn't "stutter" when using "reading" commands, and
    // tabbing/focus-driven behavior is preserved.
    //
    // Also allow explicitly assigning aria-labelledby in case there is no label,
    // i.e. we wish to use dropdown in a table, and some other column value should
    // effectively "label" it.
    this.attr = {
      label: {
        id: labelId,
      },
      select: {
        id: selectId,
        ariaLabelledby: this.ariaLabelledby || labelId,
        ariaLabel: labelId ? null : this.ariaLabel,
      },
    };
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
