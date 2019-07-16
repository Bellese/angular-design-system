import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';

storiesOf('Components|Spinner', module)
    .addDecorator(
        moduleMetadata({
            declarations: [SpinnerComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-spinner
                size = 'big'
                color = 'base'
                [filled] = true
                [inversed] = false
                [hide] = 'false'
                dataAutoId = 'testingID'>
            </app-spinner>
        `,
    }));
