import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppDatepickerComponent } from './date-picker.component';

storiesOf('Components|Date Picker', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppDatepickerComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            The date picker component takes the following parameters:
        `,
    }))
    .add('Normal', () => ({
        template: `
            <app-date-picker 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-date-picker>
        `,
    }));
