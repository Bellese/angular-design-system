import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class AppChoiceComponent implements OnInit, OnChanges {
  @Input() inputType = 'checkbox';
  @Input() index = 'main';
  @Input() fieldId: string;
  @Input() size: string;
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() value: string;
  @Input() groupName: string;
  @Input() showTitle = true;
  @Input() labelClass: string;
  @Input() inputClass: string;
  @Input() errorMessage: string;
  @Input() isChecked: boolean;
  @Input() disabled: boolean;
  @Input() dataAutoId: string;
  @Input() tabIndex: number;
  @Input() labelTextClass: string;
  @Input() control: FormControl;
  @Input() formlyAttributes = {};
  @Input() alertMessageList?: Array<string>;
  @Input() alertVariation?: string;

  @Output() choiceChange = new EventEmitter<any>();

  choiceSize = ChoiceSize;

  constructor() {}

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
    this.setDisabled();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setDisabled();
    }
  }

  setDisabled() {
    if (this.disabled) {
      this.control?.disable();
    } else {
      this.control?.enable();
    }
  }

  onChange($event) {
    this.choiceChange.emit($event);
  }

  public get fieldIdComputed() {
    return this.fieldId ? this.fieldId : this.value + '-' + this.index;
  }
}

enum ChoiceSize {
  'small' = 'ds-c-choice--small',
  'medium' = '',
}
