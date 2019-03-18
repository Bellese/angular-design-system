import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class AppTicket {
    @Input() id;
    @Input() title;
    @Input() description;
    @Input() ariaLabel;
    @Input() dataAutoId: string;
    @Output() buttonClick = new EventEmitter<any>();
    
    buttonClicked = false;
    
    ngOnInit() {
    }
    
    passAction(e) {
        this.buttonClicked =! this.buttonClicked;
        this.buttonClick.emit(e);
    }

}
