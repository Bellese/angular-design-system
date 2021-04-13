import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppChipFilterComponent } from './chip-filter.component';
import { ChipFilterModule } from './chip-filter.module';
import {
  dropdownList,
  dropdownSettings,
  dropdownSettings2,
  dropdownSettings3,
  dropdownSettingsError,
  settingsProps,
} from './story.const';

const props = {
  ...defaultProps,
  dropdownList,
  selectedItems: [],
  loading: false,
  dropdownSettings,
  dropdownSettingsError,
  dropdownSettings2,
  dropdownSettings3,
  logjam: (e) => {
    console.log(e);
  },
  bottomScrolled: (e) => {
    console.log('Set loading as true until the server responds with more of the list.');
  },
};

export default {
  title: 'Components/Chip Filter',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, ChipFilterModule],
    }),
  ],
  component: AppChipFilterComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
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
});

export const Normal: Story<AppChipFilterComponent> = () => ({
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
});

export const Error: Story<AppChipFilterComponent> = () => ({
  template: `
  <app-chip-filter
    style="width: 50vw; display: block; position: relative; margin: 0 auto; padding-top: 4rem;"
    [data]="dropdownList"
    [(ngModel)]="selectedItems"
    [settings]="dropdownSettingsError"
    (onDeSelect)="logjam($event)"
    (onDeSelectAll)="logjam($event)"
    (onSelect)="logjam($event)"
    (onSelectAll)="logjam($event)">
  </app-chip-filter>
`,
  props,
});
export const HideSearchFilter: Story<AppChipFilterComponent> = () => ({
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
});
export const DisableDropdown: Story<AppChipFilterComponent> = () => ({
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
});
export const WithLoadingSpinner: Story<AppChipFilterComponent> = () => ({
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
});
export const LimitChipsShown: Story<AppChipFilterComponent> = () => ({
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
});
