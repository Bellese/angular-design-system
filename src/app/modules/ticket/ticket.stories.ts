import { storiesOf , moduleMetadata} from '@storybook/angular';

import { AppTicketComponent } from './ticket.component';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Ticket', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTicketComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-ticket
                dataAutoId = 'testingID'
                [id]="'ticketComp'"
                [title]="'eCQM'"
                [description]="'Track status and validation of EHR patients.'"
                (buttonClick)="handleEvent($event)">
                <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
            </app-ticket>
        `,
        props: defaultProps
    }));