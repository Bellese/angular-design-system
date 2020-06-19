// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { ButtonModule } from './button.module';

storiesOf('Components|Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ButtonModule
            ],
            declarations: [],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['ButtonModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Use this to further specify button to the screen reader',
                },
                {
                    name: 'buttonType',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this to add classes to button. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
                },
                {
                    name: 'buttonID',
                    type: 'string',
                    value: 'Use this to add unique ID to button',
                },
                {
                    name: 'ariaSort',
                    type: 'string',
                    value: 'Use this to further specify button\'s sort order (ascending, descending) to the screen reader',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    value: 'Use this to disable the button',
                },
                {
                    name: 'callBack',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the button is clicked. It takes one argument, which is a click event.',
                },
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-button
                ariaLabel = 'Button Example'
                buttonType = 'ds-c-button'
                buttonID = 'Button1'
                [ariaSort] = true
                dataAutoId = 'testingID'
                tabLevel= '2'
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
