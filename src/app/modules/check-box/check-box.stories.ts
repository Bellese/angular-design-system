import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppCheckBoxComponent } from './check-box.component';

import { defaultProps } from '../../../../.storybook/helpers';


storiesOf('Components|Check Box', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCheckBoxComponent],
        }),
    )
    .add('Normal', () => ({
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
        props: defaultProps
    }));
