import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../../stories/component-intro.component';
import { StoriesModule } from '../../../../stories/stories.module';
import { ToastComponent } from '../component/toast.component';
import { ToastModule } from '../toast.module';

export default {
  title: 'Services/Toast Service',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, ToastModule],
    }),
  ],
  component: ToastComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
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
        modules: ['ToastModule.forRoot()'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
      {
        modules: ['BrowserAnimationsModule'],
        file: '@angular/platform-browser/animations',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'message',
        type: 'string',
        value: 'The message to show in the toast alert.',
      },
      {
        name: 'title',
        type: 'string',
        value: 'The title to show in the toast alert.',
      },
      {
        name: 'variation',
        type: 'string',
        value: 'The type of alert status to display in the toast alert.  Can be error, warn, success, or normal.',
      },
    ],
    notes: [
      'I was unable to set up a example of this service in action using storybook, but it is very easy to set use.',
      `<ol>
                    <li>
                        Add the following line to all styles sections of your angular.json file.
                        <ul>
                            <li><code>node_modules/ngx-toastr/toastr.css</code></li>
                        </ul>
                    </li>
                    <li>Import <code>ToastModule.forRoot()</code> into your root level NgModule object.</li>
                    <li>
                        Import the ToastService into your component file.
                        <ul>
                            <li><code>Import ToastService from @bellese/angular-design-system</code></li>
                        </ul>
                    </li>
                    <li>
                        Add the ToastService to your component\'s constructor.
                        <ul>
                            <li><code>constructor(..., private toastService: ToastService)</code></li>
                        </ul>
                    </li>
                    <li>Call this.toastService.showToast(message, title, variation) using the parameters defined above.</li>
                </ol>`,
    ],
  },
});
