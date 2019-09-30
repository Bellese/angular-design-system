import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})

export class AppChoiceComponent implements OnInit {
    @Input() inputType = 'checkbox';
    @Input() index = 'main';
    @Input() value: string;
    @Input() groupName: string;
    @Input() showTitle = true;
    @Input() labelClass: string;
    @Input() isChecked: boolean;
    @Input() dataAutoId: string;

    @Output() choiceChange = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    onChange($event) {
      this.choiceChange.emit($event);
    }

}
