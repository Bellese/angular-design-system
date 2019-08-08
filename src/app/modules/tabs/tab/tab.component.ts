import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class AppTabComponent {
    @Input() id: string;
    @Input() className: string;
    @Input() title: string;
    @Input() href: string;
    @Input() ariaLabel: string;
    @Input() dataAutoId: string;
    @Input() disabled: boolean;
    @Input() selected: boolean;
    @Output() onClick = new EventEmitter<any>();

    passAction(e) {
        this.selected = !this.selected;
        this.onClick.emit(e);
    }

}
