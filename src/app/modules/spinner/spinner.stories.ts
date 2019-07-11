import { storiesOf } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';

const moduleMetadata = {
    declarations: [SpinnerComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Spinner', module)
    .add('Normal', () => ({
        moduleMetadata,
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
        props
    }));
