// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { SpinnerModule } from './spinner.module';

storiesOf('Components|Spinner', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                SpinnerModule,
            ]
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
                    modules: ['SpinnerModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'size',
                    type: 'string',
                    value: 'Size of spinner component (small, big)',
                },
                {
                    name: 'color',
                    type: 'string',
                    value: 'A Color for the spinner (success, primary, muted)',
                },
                {
                    name: 'filled',
                    type: 'boolean',
                    value: 'a boolean for filled or not',
                },
                {
                    name: 'inversed',
                    type: 'boolean',
                    value: 'a boolean for inversed or not',
                },
                {
                    name: 'hide',
                    type: 'boolean',
                    value: 'a boolean to hide and show spinner used to trigger before and after promises',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ],
        }
    }))
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
