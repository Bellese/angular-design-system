import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class AppButton {
    @Input() ariaLabel;
    @Input() buttonType;
    @Input() buttonID;
    @Input() ariaSort;
    @Input() dataAutoId: string;
    
    @Output() callBack = new EventEmitter<any>();
    
    state = false;
    
    callBackFunction(e) {
        this.state = !this.state;
        
        (e.key && e.key === "Enter") ? e = false : null;
        
        if(e) {
            this.callBack.emit(e);
        }
    }
}
