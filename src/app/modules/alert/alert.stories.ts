import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AlertComponent } from './alert.component';

import ParameterComponent from '../../../stories/parameters.component';

storiesOf('Components|Alert', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AlertComponent, ParameterComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            <h1>Import</h1>
            <pre>
                import &#123; AlertModule &#125; from '@bellese/angular-design-system';
            </pre>
            <h1>NgModule</h1>
            <p>Add <code>AlertModule</code> to the <code>imports</code> section of your NgModule definition
            <h1>Parameters</h1>
            <app-storybook-parameter-component [parameters]="parameters"></app-storybook-parameter-component>
        `,
        props: {
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
            ]
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
