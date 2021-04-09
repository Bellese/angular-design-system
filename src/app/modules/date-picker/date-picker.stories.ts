import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppDatepickerComponent } from './date-picker.component';
import { DatePickerModule } from './date-picker.module';

export default {
  title: 'Components/Date Picker',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, DatePickerModule],
    }),
  ],
  component: AppDatepickerComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
  props: {
    imports: [
      {
        modules: ['DatePickerModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'label',
        type: 'string',
        value: 'The label that displays on the form field',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
    ],
  },
});

export const Normal: Story<AppDatepickerComponent> = () => ({
  template: `
            <app-date-picker 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-date-picker>
        `,
});
