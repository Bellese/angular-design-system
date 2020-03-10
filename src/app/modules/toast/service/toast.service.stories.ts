// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../../stories/stories.module';
import { defaultProps } from '../../../../../.storybook/helpers';

// Modules
import { ToastModule } from '../toast.module';

storiesOf('Services|Toast Service', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ToastModule,
            ],
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
                    modules: ['ToastModule'],
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
                    value: 'The message to show in the toast alert.'
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
                    <li>Import the ToastModule into your NgModule object.</li>
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
                </ol>`
            ]
        }
    }));
