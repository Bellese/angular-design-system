import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AppButtonComponent } from './button.component';

const moduleMetadata = {
    declarations: [AppButtonComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Button', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button--danger'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                [disabled]='true'
                (callBack) = 'announce($event)'>
                    Example Button
            </app-button>
        `,
        props
    }));
