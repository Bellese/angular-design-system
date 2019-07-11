import { storiesOf } from '@storybook/angular';

import { AppCheckBoxComponent } from './check-box.component';

const moduleMetadata = {
    declarations: [AppCheckBoxComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Check Box', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-check-box
                index = 0
                value = 'checkboxExample'
                groupName = 'checkboxtoendallcheckbox'
                [showTitle] = true
                labelClass = 'checkboxEx'
                dataAutoId = 'testingID'>
            </app-check-box>
        `,
        props
    }));
