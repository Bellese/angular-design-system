// Storybook
import { moduleMetadata, Story } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { Meta } from '@storybook/angular/types-6-0';

// Modules
import { PlusModule } from './plus.module';

// Misc
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppPlusComponent } from './plus.component';
import ComponentIntroComponent from '../../../stories/component-intro.component';

export default {
  title: 'Deprecated/Components - Plus',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, PlusModule, BrowserAnimationsModule],
    }),
  ],
  component: AppPlusComponent,
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
        modules: ['PlusModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'expand',
        type: 'boolean',
        value: 'Set this to true to change the plus to a minus',
      },
      {
        name: 'clicked',
        type: 'boolean',
        value: 'Set this to true to change the plus to a minus',
      },
      {
        name: 'plusClass',
        type: 'string',
        value:
          'Use this to add a class to the plus component.  This is a good way to change the color of the component',
      },
    ],
  },
});

export const Plus: Story<AppPlusComponent> = () => ({
  template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = false
                    [clicked] = false >
                </app-plus>
            </div>
        `,
});

export const Minus: Story<AppPlusComponent> = () => ({
  template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = true
                    [clicked] = true >
                </app-plus>
            </div>
        `,
});

export const SetColor: Story<AppPlusComponent> = () => ({
  template: `
            <app-plus
                [expand]='false'
                [clicked]='false'
                plusClass="ds-u-fill--primary">
            </app-plus>
        `,
});
