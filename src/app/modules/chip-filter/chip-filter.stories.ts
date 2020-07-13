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
  .add('Default', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [placeholder]="'Search Provider(s)'"
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
