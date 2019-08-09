import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animations } from '../../animations/animations';


@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    animations: [
        Animations.animations
    ]
})
export class AppTabComponent {
    @Input() id: string;
    @Input() className: string;
    @Input() title: string;
    @Input() ariaLabel: string;
    @Input() dataAutoId: string;
   // @Input() description: string;
    @Input() disabled: boolean;
    @Input() visible: boolean;
    @Input() selected: boolean;
    @Output() onClick = new EventEmitter<any>();

    passAction(e) {
        this.selected = !this.selected;
        this.onClick.emit(e);
    }

}
