import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css']
})
export class AppDropDownComponent {
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
    @Output() selectedOption = new EventEmitter<any>();

    selectOption(e) {
        const selectedValue = e.target.value;
        this.defaultSelectedValue = selectedValue;
        this.defaultSelected = this.options.findIndex(option => option.value === selectedValue);

        this.selectedOption.emit(selectedValue);
    }
}
