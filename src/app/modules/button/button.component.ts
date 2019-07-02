import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class AppButtonComponent {
    @Input() ariaLabel: string;
    @Input() buttonType: string;
    @Input() buttonID: string;
    @Input() ariaSort: boolean;
    @Input() dataAutoId: string;
    @Input() disabled: boolean;
    @Output() callBack = new EventEmitter<any>();

    state = false;

    callBackFunction(e) {
        if (!this.disabled) {
            this.state = !this.state;
            if (e.key && e.key === 'Enter') { e = false; }
    
            if (e) {
                this.callBack.emit(e);
            }    
        }
    }
}
