import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppButtonComponent } from './button.component';

import { defaultProps } from '../../../../.storybook/helpers';

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
                (callBack) = 'handleEvent($event)'>
                    Example Button
            </app-button>
        `,
        props: defaultProps
    }));
