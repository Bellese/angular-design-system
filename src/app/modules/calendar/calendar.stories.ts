// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { CalendarModule } from './calendar.module';

storiesOf('Components|Date Picker', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                CalendarModule,
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
                    modules: ['DatePickerModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'label',
                    type: 'string',
                    value: 'The label that displays on the form field',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <calendar 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </calendar>
        `,
    }));
