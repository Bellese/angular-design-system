import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AppDatepickerComponent } from './date-picker.component';

const moduleMetadata = {
    declarations: [AppDatepickerComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Date Picker', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-date-picker 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-date-picker>
        `,
        props
    }));
