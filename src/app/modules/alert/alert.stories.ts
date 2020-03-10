// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { AlertModule } from './alert.module';

storiesOf('Components|Alert', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                AlertModule
            ],
            declarations: [],
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
            notes: [
                'The content you want to put inside the alert will go directly between the tags of the app-alert'
            ],
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-alert
                dataAutoId = 'dataID'
                heading = 'Normal Alert'
                [hideClose] = true
            >
                This is a normal alert.
            </app-alert>
        `,
    }))
    .add('With Close', () => ({
        template: `
            <app-alert
                dataAutoId = 'dataID'
                heading = 'Alert With Close Button'
                [hideClose] = false
            >
                This is an alert with a close button.
            </app-alert>
        `,
    }))
    .add('No Icon', () => ({
        template: `
            <app-alert
                dataAutoId = 'dataID'
                heading = 'Alert With No Icon'
                [hideIcon] = true
                [hideClose] = true
            >
                This is an alert with a close button.
            </app-alert>
        `,
    })).add('No Header', () => ({
        template: `
            <app-alert
                dataAutoId = 'dataID'
                [hideIcon] = true
                [hideClose] = true
            >
                This is an alert with a close button.
            </app-alert>
        `,
    })).add('Error', () => ({
        template: `
            <app-alert
                dataAutoId = 'dataID'
                [hideClose] = true
                variation = 'error'
                heading = 'Error Alert'
            >
                This is an alert with the error style.
            </app-alert>
        `,
    }));
