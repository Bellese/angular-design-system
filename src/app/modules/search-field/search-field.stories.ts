// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { defaultProps } from '../../../../.storybook/helpers';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { SearchFieldModule } from './search-field.module';

storiesOf('Components/Search Field', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                SearchFieldModule,
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
                    modules: ['SearchFieldModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'showReset',
                    type: 'boolean',
                    value: 'This is used in addition to the component as a built in reset button no styles',
                },
                {
                    name: 'reset',
                    type: 'boolean',
                    // tslint:disable-next-line: max-line-length
                    value: 'This is a boolean to pass back true, this is used for external reset buttons that you want to control the reset feature within the component',
                },
                {
                    name: 'placeHolder',
                    type: 'string',
                    value: 'placeholder text for the search field',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'used as the label for the input field',
                },
                {
                    name: 'id',
                    type: 'string',
                    value: 'used as a unique id for this field',
                },
                {
                    name: 'inputClass',
                    type: 'string',
                    value: 'class for the input field itself',
                },
                {
                    name: 'labelClass',
                    type: 'string',
                    value: 'class for input label',
                },
                {
                    name: 'hint',
                    type: 'string',
                    value: 'hint message to show above component',
                },
                {
                    name: 'hintClass',
                    type: 'string',
                    value: 'style hint message',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                    name: 'userInput',
                    type: 'function',
                    value: 'tap into the user enter event',
                },
                {
                    name: 'changes',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'allows you to listen for changes in field in case you want to enable a onkey up feature or detect change within reset feature',
                },
            ],
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-search-field
                [reset]='resetSearch'
                showReset = true
                placeHolder='Search'
                title='Search Field'
                id='tableSearch'
                inputClass='searchInput'
                labelClass='searchLabel'
                hint='Enter a search here'
                hintClass='searchHint'
                dataAutoId='testingID'
                (userInput)='handleEvent($event)'
                (changes)="resetSearch = $event">
            </app-search-field>
        `,
        props: defaultProps
    }));
