import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AlertComponent } from './alert.component';

storiesOf('Alert', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AlertComponent],
        }),
    )
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
