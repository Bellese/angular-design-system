import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppButtonComponent } from './button.component';

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Button', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppButtonComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button--normal'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                [disabled]='false'
                (callBack) = 'announce($event)'>
                    Example Button
            </app-button>
        `,
        props
    }));
