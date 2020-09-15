// Storybook
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { ChipFilterModule } from './chip-filter.module';
import { dropdownList, dropdownSettings, dropdownSettings2, dropdownSettings3, settingsProps } from './story.const';

const props = {
  ...defaultProps,
  dropdownList,
  selectedItems: [],
  loading: false,
  dropdownSettings,
  dropdownSettings2,
  dropdownSettings3,
  logjam: (e) => {
    console.log(e);
  },
  bottomScrolled: (e) => {
    console.log('Set loading as true until the server responds with more of the list.');
  },
};

storiesOf('Components/Chip Filter', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, ChipFilterModule],
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
          modules: ['ChipFilterModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
      ],
      parameters: [
        {
          name: 'disabled',
          type: 'boolean',
          value: 'If set to true, the dropdown is disabled.',
        },
        {
          name: 'settings',
          type: 'IDropdownSettings',
          value: "Use this to override the dropdown component's default settings.",
          properties: settingsProps,
        },
        {
          name: 'data',
          type: 'Array<{id: number, text: string}>',
          value: 'Populate dropdown list with data.',
        },
      ],
      notes: [],
    },
  }))
  .add('Normal', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem;"
              [data]="dropdownList"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }))
  .add('Hide Search Filter', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [data]="dropdownList"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings2"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }))
  .add('Disable Dropdown', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [data]="dropdownList"
              [disabled]="true"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings2"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }))
  .add('With Loading Spinner', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [data]="dropdownList"
              [loading]="true"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }))
  .add('With Lazy Loading Spinner', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [data]="dropdownList"
              [loading]="loading"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings"
              (onDeSelect)="logjam($event)"
              (onFilterChange)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onScrolledToBottom)="bottomScrolled($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }))
  .add('Limit Chips Shown (itemShowLimit)', () => ({
    template: `
            <app-chip-filter
              style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem"
              [data]="dropdownList"
              [(ngModel)]="selectedItems"
              [settings]="dropdownSettings3"
              (onDeSelect)="logjam($event)"
              (onDeSelectAll)="logjam($event)"
              (onSelect)="logjam($event)"
              (onSelectAll)="logjam($event)">
            </app-chip-filter>
        `,
    props,
  }));
