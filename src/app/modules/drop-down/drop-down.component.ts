import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css']
})
export class AppDropDownComponent {
    @Input() options;
    @Input() labelName: string;
    @Input() selectClass: string;
    @Input() id = 1;
    @Input() defaultSelected = 0;
    @Input() hintMessage: string;
    @Input() errorMessage: string;
    @Input() error: boolean;
    @Input() dataAutoId: string;
    @Output() selectedOption = new EventEmitter<any>();

    selectOption(e) {
        this.selectedOption.emit(e.target.value);
    }
}