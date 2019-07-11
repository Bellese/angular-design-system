import { storiesOf } from '@storybook/angular';

import { AppTicketComponent } from './ticket.component';

const moduleMetadata = {
    declarations: [AppTicketComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Ticket', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-ticket
                dataAutoId = 'testingID'
                [id]="'ticketComp'"
                [title]="'eCQM'"
                [description]="'Track status and validation of EHR patients.'"
                (buttonClick)="announce($event)">
                <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
            </app-ticket>
        `,
        props
    }));