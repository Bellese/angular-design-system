import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})

export class AppChoiceComponent implements OnInit {
    @Input() inputType = 'checkbox';
    @Input() index = 'main';
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
    @Input() dataAutoId: string;
    @Input() tabIndex: number;

    @Output() choiceChange = new EventEmitter<any>();

    choiceSize = ChoiceSize;

    constructor() { }

    ngOnInit() {
    }

    onChange($event) {
      this.choiceChange.emit($event);
    }

}

enum ChoiceSize {
  'small' = 'ds-c-choice--small',
  'medium' = '',
}
