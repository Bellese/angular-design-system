import { storiesOf } from '@storybook/angular';

import { AppTextFieldComponent } from './text-field.component';

const moduleMetadata = {
    declarations: [AppTextFieldComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Text Field', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-text-field
                title = 'Text Field Title'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                dataAutoId = 'testingID'
                (userInput) = 'announce($event)'>
            </app-text-field>
        `,
        props
    }));