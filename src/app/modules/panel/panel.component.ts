import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Animations } from '../animations/animations.js';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
    animations: [
        Animations.animations
    ]
})
export class AppPanel {

    @Output() panelClick = new EventEmitter<any>();
    @Input() title;
    @Input() extTitle;
    @Input() extTitleClass;
    @Input() expand: boolean = false;
    @Input() openAll: boolean = false;

    clicked;
    
    constructor() { 
    }

    ngOnInit() {
        if (this.expand) this.clicked = true;   
    }
    
    panelStateChange(e) {
        this.panelClick.emit(e);
        this.clicked = true;
        this.expand =! this.expand;   
    }

}
