import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AlertComponent } from './alert.component';
import { AlertModule } from './alert.module';

export default {
  title: 'Components/Alert',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, AlertModule],
    }),
  ],
  component: AlertComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
  props: {
    imports: [
      {
        modules: ['AlertModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'variation',
        type: 'string',
        value: 'Type of alert status.can be error, warn, or success',
      },
      {
        name: 'heading',
        type: 'string',
        value: 'Status heading of the alert',
      },
      {
        name: 'hideIcon',
        type: 'boolean',
        value: 'Hide/show the alert status icon',
      },
      {
        name: 'hideClose',
        type: 'boolean',
        value: 'Hide/show the close button',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
    ],
    notes: ['The content you want to put inside the alert will go directly between the tags of the app-alert'],
  },
});

export const Normal: Story<AlertComponent> = () => ({
  template: `
            <app-alert
                dataAutoId = 'dataID'
                heading = 'Normal Alert'
                [hideClose] = true
            >
                This is a normal alert.
            </app-alert>
        `,
});

export const WithClose: Story<AlertComponent> = () => ({
  template: `
            <app-alert
                dataAutoId = 'dataID'
                heading = 'Alert With Close Button'
                [hideClose] = false
            >
                This is an alert with a close button.
            </app-alert>
        `,
});

export const NoIcon: Story<AlertComponent> = () => ({
  template: `
    <app-alert
        dataAutoId = 'dataID'
        heading = 'Alert With No Icon'
        [hideIcon] = true
        [hideClose] = true
    >
        This is an alert with a close button.
    </app-alert>`,
});

export const NoHeader: Story<AlertComponent> = () => ({
  template: `
    <app-alert
        dataAutoId = 'dataID'
        [hideIcon] = true
        [hideClose] = true
    >
        This is an alert with a close button.
    </app-alert>`,
});

export const Error: Story<AlertComponent> = () => ({
  template: `
    <app-alert
        dataAutoId = 'dataID'
        [hideClose] = true
        variation = 'error'
        heading = 'Error Alert'
    >
        This is an alert with the error style.
    </app-alert>`,
});
