import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppTextFieldComponent } from './text-field.component';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Text Field', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTextFieldComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-text-field
                title = 'Text Field Title'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                dataAutoId = 'testingID'
                (userInput) = 'handleClick($event)'>
            </app-text-field>
        `,
        props: defaultProps
    }));