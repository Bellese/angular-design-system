import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { SpinnerComponent } from './spinner.component';
import { SpinnerModule } from './spinner.module';

export default {
  title: 'Components/Spinner',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, SpinnerModule],
    }),
  ],
  component: SpinnerComponent,
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
        modules: ['SpinnerModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'size',
        type: 'string',
        value: 'Size of spinner component (small, big)',
      },
      {
        name: 'color',
        type: 'string',
        value: 'A Color for the spinner (success, primary, muted)',
      },
      {
        name: 'filled',
        type: 'boolean',
        value: 'a boolean for filled or not',
      },
      {
        name: 'inversed',
        type: 'boolean',
        value: 'a boolean for inversed or not',
      },
      {
        name: 'hide',
        type: 'boolean',
        value: 'a boolean to hide and show spinner used to trigger before and after promises',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
    ],
  },
});

export const Normal: Story<SpinnerComponent> = () => ({
  template: `
            <app-spinner
                size = 'big'
                color = 'base'
                [filled] = true
                [inversed] = false
                [hide] = 'false'
                dataAutoId = 'testingID'>
            </app-spinner>
        `,
});
