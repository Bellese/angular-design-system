// Storybook
import {storiesOf, moduleMetadata} from '@storybook/angular';
import {StoriesModule} from '../../../stories/stories.module';
import {defaultProps} from '../../../../.storybook/helpers';

// Modules
import {ChipFilterModule} from './chip-filter.module';


const props = {
  ...defaultProps,
  dropdownList: [
    {item_id: 1, item_text: 'Mumbai'},
    {item_id: 2, item_text: 'Bangaluru'},
    {item_id: 3, item_text: 'Pune'},
    {item_id: 4, item_text: 'Navsari'},
    {item_id: 5, item_text: 'New Delhi'}
  ],
  selectedItems: [],
  dropdownSettings: {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
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
  .add('Default', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [placeholder]="'custom placeholder'"
              [data]="dropdownList"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings"
              (onSelect)="onItemSelect($event)"
              (onSelectAll)="onSelectAll($event)">
            </app-chip-filter>
        `,
    props,
  }));
