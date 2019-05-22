import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTicketComponent } from './ticket.component';

@NgModule({
    declarations: [AppTicketComponent],
    imports: [CommonModule],
    exports: [AppTicketComponent]
})
export class TicketModule { }
