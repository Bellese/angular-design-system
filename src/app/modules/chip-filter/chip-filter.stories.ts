// Storybook
import {storiesOf, moduleMetadata} from '@storybook/angular';
import {StoriesModule} from '../../../stories/stories.module';
import {defaultProps} from '../../../../.storybook/helpers';

// Modules
import {ChipFilterModule} from './chip-filter.module';


const props = {
  ...defaultProps,
  dropdownList: [
    {item_id: 1, item_text: 'Provider Name 1'},
    {item_id: 2, item_text: 'Provider Name 2213123123'},
    {item_id: 3, item_text: 'Provider Name 452345243543254'},
    {item_id: 4, item_text: 'Provider Name 14325234523454235'},
    {item_id: 5, item_text: 'Provider Name 1e2q423q45'}
  ],
  selectedItems: [],
  dropdownSettings: {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All Providers',
    unSelectAllText: 'UnSelect All Providers',
    label: 'Search Providers',
    itemsShowLimit: 3,
    allowSearchFilter: true
  },
  logjam: (e) => {
    console.log(e);
  }
};

storiesOf('Components|Chip Filter', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        StoriesModule,
        ChipFilterModule,
      ]
    }),
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
          modules: ['ChipFilterModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        }
      ],
      parameters: [
        {
          name: 'labelName',
          type: 'string',
          value: 'The value that shows in the dropdown\'s label',
        },
        {
          name: 'labelClass',
          type: 'string',
          value: 'The CSS class that applies to the label',
        },
        {
          name: 'hintMessage',
          type: 'string',
          value: 'A hint message to display in the component',
        },
        {
          name: 'errorMessage',
          type: 'string',
          value: 'An error message to display in the component',
        },
        {
          name: 'error',
          type: 'boolean',
          value: 'If set to true, the dropdown turns red.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          value: 'If set to true, the dropdown is disabled.',
        },
        {
          name: 'placeholder',
          type: 'string',
          value: 'Dropdown search placeholder.',
        },
        {
          name: 'settings',
          type: 'IDropdownSettings',
          value: 'Use this to override the dropdown component\'s default settings.',
          properties: [
            {
              name: 'idField',
              type: 'string',
              value: 'The id for the dropdown component',
            },
            {
              name: 'singleSelection',
              type: 'boolean',
              value: 'Use this to further specify the dropdown component to the screen reader',
            },
            {
              name: 'textField',
              type: 'string',
              value: 'This is a FontAwesome icon that can show before the label.  If no icon or label is specified, the elements inside of the component will be used as ng-content.',
            },
            {
              name: 'disabledField',
              type: 'string',
              value: 'This is the.',
            },
            {
              name: 'itemsShowLimit',
              type: 'number',
              value: 'Hide or show number of results.',

            },
            {
              name: 'maxHeight',
              type: 'number',
              value: 'Max height of dropdown.',

            },
            {
              name: 'enableCheckAll',
              type: 'boolean',
              value: 'Display check all.',

            },
            {
              name: 'closeDropDownOnSelection',
              type: 'boolean',
              value: 'Close dropdown on selection.',
            }
          ]
        },
        {
          name: 'data',
          type: 'Array<{item_id: number, item_text: string}>',
          value: 'Populate dropdown list with data.',
        }
      ],
      notes: []
    }
  }))
  .add('Normal', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [placeholder]="'Search Provider(s)'"
              [searchPlaceholder]="'Search by Provider Name or ID'"
              [data]="dropdownList"
              [labelName]="'Provider(s)'"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }));
