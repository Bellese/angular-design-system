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
                buttonType = 'ds-c-button'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                (callBack) = 'handleEvent($event)'>
                    Example Button
            </app-button>
        `,
        props: defaultProps
    }))
    .add('Primary', () => ({
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button ds-c-button--primary'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                (callBack) = 'handleEvent($event)'>
                    Example Button
            </app-button>
        `,
        props: defaultProps
    }))
    .add('Transparent (link)', () => ({
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button ds-c-button--transparent'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                (callBack) = 'handleEvent($event)'>
                    Example Button
            </app-button>
        `,
        props: defaultProps
    }))
    .add('Disabled', () => ({
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                [disabled] = true
                (callBack) = 'handleEvent($event)'>
                    Example Button
            </app-button>
        `,
        props: defaultProps
    }))
    
    ;
