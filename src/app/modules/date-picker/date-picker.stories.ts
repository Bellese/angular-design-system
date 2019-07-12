import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppDatepickerComponent } from './date-picker.component';

storiesOf('Date Picker', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppDatepickerComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-date-picker 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-date-picker>
        `,
    }));
