import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTicket } from './ticket.component';

@NgModule({
    declarations: [AppTicket],
    imports: [CommonModule],
    exports: [AppTicket]
})
export class TicketModule { }
