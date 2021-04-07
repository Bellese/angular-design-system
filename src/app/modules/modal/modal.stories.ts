// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { ModalModule } from './modal.module';
import { ModalShellModule } from '../modal-shell/modal-shell.module';

// Components
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';

// Services
import { ModalService } from '../../services/modal/modal.service';

const modalData = [
  {
    heading: 'Description',
  },
  {
    paragraph: 'Severe Sepsis and Septic Shock',
  },
  {
    heading: 'Supplemental Information',
  },
  {
    hline: true,
  },
  {
    heading2: 'Volume Category Reference',
  },
  {
    paragraph: 'Low: #26 min. (5)',
  },
  {
    paragraph: 'Med: #43 min. (12)',
  },
  {
    paragraph: 'High: #72 min. (8)',
  },
  {
    heading2: 'Supplemental Information Footnotes',
  },
  {
    paragraph: '( 5 ) - The number of cases/patients is too few to report a star rating.',
  },
  {
    paragraph: '( 12 ) - Data submitted were based on a sample of cases/patients.',
  },
  {
    paragraph: '( 8 ) - Results are based on a shorter time period than required.',
  },
];

const props = {
  ...defaultProps,
  modalData,
  appTableModalComponent: AppTableModalComponent,
};

storiesOf('Components/Modal', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, ModalModule, ModalShellModule],
      providers: [ModalService],
      declarations: [AppTableModalComponent],
    })
  )
  .add('Intro', () => ({
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
          modules: ['ModalModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
          forRoot: true,
        },
        {
          modules: ['ModalShellModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
        {
          modules: ['ModalService'],
          file: '@bellese/angular-design-system',
          ngmodule: 'providers',
        },
      ],
      parameters: [
        {
          name: 'modalTitle',
          type: 'string',
          value: 'The title of the modal',
        },
        {
          name: 'modalTitle',
          type: 'any',
          value: 'The data to be sent to the modal body',
        },
        {
          name: 'modalComponent',
          type: 'any',
          // tslint:disable-next-line: max-line-length
          value:
            'This will currently allow you to place a static component inside the modal, this component cannot receive data. When you use this you must import the component in the controller you are using to hold the modal component, then pass the export class name to the modal',
        },
        {
          name: 'firstFocus',
          type: 'string',
          // tslint:disable-next-line: max-line-length
          value:
            'The first thing that should be focused on when modal opens, use when it should be something that is not the cancel button',
        },
        {
          name: 'content',
          type: 'string',
          value: 'The name of the modal button',
        },
        {
          name: 'buttonClass',
          type: 'string',
          // tslint:disable-next-line: max-line-length
          value:
            'Use this to add classes to button. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
        },
        {
          name: 'abbr',
          type: 'string',
          value: 'In case you need to abbr the name of the button, mostly used inside the table',
        },
        {
          name: 'ID',
          type: 'string',
          value: 'Use this to add unique ID to button',
        },
        {
          name: 'dataAutoId',
          type: 'string',
          value: 'Use this for testing ID',
        },
      ],
      notes: [
        'The modal is essentially the button component that renders a modal component. But we are extending the option to add dynamic custom components within the modal. once you render the app-modal component with the requirements below everything should connect for you.',
        'Remember - when you import modalModule make sure you do it as modalModule.forRoot()',
      ],
    },
  }))
  .add('Normal', () => ({
    template: `
            <app-modal
                modalTitle='modalTitle'
                [modalData]='modalData'
                content='Open Modal'
                [modalComponent]='appTableModalComponent'
            >
            </app-modal>
        `,
    props,
  }));
