import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class AppTicketComponent {
    @Input() id;
    @Input() title;
    @Input() description;
    @Input() ariaLabel;
    @Input() dataAutoId: string;
    @Output() buttonClick = new EventEmitter<any>();

    buttonClicked = false;

    passAction(e) {
        this.buttonClicked = !this.buttonClicked;
        this.buttonClick.emit(e);
    }

}
