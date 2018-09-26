import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class AppButton {
    @Input() content;
    @Input() ariaLabel;
    @Input() buttonType;
    @Input() image;
    @Input() imageClass;
    @Input() buttonID;
    @Input() ariaSort;
    @Input() abbr;
    
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
