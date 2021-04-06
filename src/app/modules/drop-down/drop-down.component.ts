import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class AppDropDownComponent implements OnInit {
  @Input() options;
  @Input() labelName: string;
  @Input() labelClass: string;
  @Input() selectClass: string;
  @Input() ariaLabel: string;
  @Input() id = 1;
  @Input() defaultSelected = 0;
  @Input() defaultSelectedValue = '';
  @Input() hintMessage: string;
  @Input() errorMessage: string;
  @Input() error: boolean;
  @Input() dataAutoId: string;
  @Input() disabled: boolean;
  @Input() control: FormControl;
  @Input() formlyAttributes = 'field';
  @Input() alertMessageList?: Array<string>;
  @Input() alertVariation?: string;
  @Output() selectedOption = new EventEmitter<any>();

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
  }

  selectOption(e) {
    const selectedValue = e.target.value;
    this.defaultSelectedValue = selectedValue;
    this.defaultSelected = this.options.findIndex((option) => option.value === selectedValue);

    this.selectedOption.emit(selectedValue);
  }
}
