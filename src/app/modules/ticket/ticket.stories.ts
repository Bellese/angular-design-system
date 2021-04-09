import { moduleMetadata, Story } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';
import { Meta } from '@storybook/angular/types-6-0';
import { TicketModule } from './ticket.module';
import { AppTicketComponent } from './ticket.component';
import ComponentIntroComponent from '../../../stories/component-intro.component';

export default {
  title: 'Components/Ticket',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, TicketModule],
    }),
  ],
  component: AppTicketComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
  props: {
    imports: [
      {
        modules: ['TicketModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'id',
        type: 'string',
        value: 'Add a unique ID to the ticket',
      },
      {
        name: 'title',
        type: 'string',
        value: 'Used as the title for the ticket',
      },
      {
        name: 'description',
        type: 'string',
        value: 'Used as the description for the ticket',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        value: 'Used as the aria label for the ticket',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        value: 'Used this for testing ID',
      },
      {
        name: 'buttonClick',
        type: 'function',
        // tslint:disable-next-line: max-line-length
        value:
          'A javascript function that will be called when the ticket is clicked. It takes one argument, which is a click event.',
      },
    ],
    notes: [
      'This component will span the width of the screen, you will need to put it in a grid layout to organize it on the page',
      'Furthermore there is an option to add any content on the right side of the box. You will see that in the example.',
    ],
  },
});

export const Normal: Story<AppTicketComponent> = () => ({
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
  props: defaultProps,
});

export const Multiple: Story<AppTicketComponent> = () => ({
  template: `
            <div class="ds-l-row">
                <div class="ticket-wrapper ds-u-margin-y--1 ds-l-col--12 ds-l-sm-col--6 ds-l-lg-col--4">
                    <app-ticket
                        id="ticketPR"
                        title="Public Reporting"
                        ariaLabel="Public Reporting"
                        description="Preview of Hospital Compare data prior to public display"
                        dataAutoId="ticketPR"
                        (buttonClick)="handleEvent($event)">
                        <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
                    </app-ticket>
                </div>
                <div class="ticket-wrapper ds-u-margin-y--1 ds-l-col--12 ds-l-sm-col--6 ds-l-lg-col--4">
                    <app-ticket
                        id="ticketECQM"
                        title="eCQM"
                        ariaLabel="eCQM"
                        description="Track STatus and validation of EHR patient files"
                        dataAutoId="ticketECQM"
                        (buttonClick)="handleEvent($event)">
                        <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
                    </app-ticket>
                </div>
                <div class="ticket-wrapper ds-u-margin-y--1 ds-l-col--12 ds-l-sm-col--6 ds-l-lg-col--4">
                    <app-ticket
                        id="ticketPC"
                        title="Program Credit Report"
                        ariaLabel="Program Credit Report"
                        description="Review how your uploaded data applies toward program credit"
                        dataAutoId="ticketPC"
                        (buttonClick)="handleEvent($event)">
                        <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
                    </app-ticket>
                </div>
            </div>
        `,
  props: defaultProps,
});
