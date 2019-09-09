import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
    animations: [
        Animations.animations
    ]
})
export class AppPanelComponent implements OnInit {

    @Output() panelClick = new EventEmitter<any>();
    @Input() title: string;
    @Input() titleClass = 'ds-u-fill--primary-darkest ds-u-color--white';
    @Input() extTitle = false;
    @Input() extTitleClass: string;
    @Input() expand = false;
    @Input() expandedClass = 'ds-u-padding--2';
    @Input() openAll = false;
    @Input() dataAutoId: string;

    clicked;

    constructor() {
    }

    ngOnInit() {
        if (this.expand) { this.clicked = true; }
    }

    panelStateChange(e) {
        this.panelClick.emit(e);
        this.clicked = true;
        this.expand = !this.expand;
    }

}
