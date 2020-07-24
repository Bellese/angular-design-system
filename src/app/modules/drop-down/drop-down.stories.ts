// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { DropdownModule } from './drop-down.module';

const dropDownData = [
    {
        'content': 'option1',
        'value': 'op1'
    },
    {
        'content': 'option2',
        'value': 'op2'
    },
    {
        'content': 'option3',
        'value': 'op3'
    }
];

const props = {
    ...defaultProps,
    dropDownData,
};

storiesOf('Components|Drop Down', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                DropdownModule,
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
                    modules: ['DropdownModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'options',
                    type: 'array of objects',
                    // TODO: document structure of the objects
                    value: 'An array of javascript objects that have content and value properties, used to populate the dropdown options',
                    properties:  [
                        {
                            name: 'content',
                            type: 'string',
                            value: 'The string shown in the dropdown label'
                        },
                        {
                            name: 'value',
                            type: 'string',
                            value: 'The value of the each item in the dropdown'
                        }
                    ]
                },
                {
                    name: 'labelName',
                    type: 'string',
                    value: 'The value that shows in the dropdown\'s label',
                },
                {
                    name: 'labelClass',
                    type: 'string',
                    value: 'The CSS class that applies to the label',
                },
                {
                    name: 'selectClass',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this to add classes to drop down. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Use this to further specify button to the screen reader',
                },
                {
                    name: 'id',
                    type: 'string',
                    value: 'Use this to add unique ID to dropdown',
                },
                {
                    name: 'defaultSelected',
                    type: 'number',
                    value: 'Use this to select an option index by default when the component loads.  Use your desired option\'s index from the options array (Deprecated)',
                },
                {
                    name: 'defaultSelectedValue',
                    type: 'string',
                    value: 'Use this to select an option (by value) by default when the component loads.  Use your desired option\'s index from the options array',
                },
                {
                    name: 'hintMessage',
                    type: 'string',
                    value: 'A hint message to display in the component',
                },
                {
                    name: 'errorMessage',
                    type: 'string',
                    value: 'An error message to display in the component',
                },
                {
                    name: 'error',
                    type: 'boolean',
                    value: 'If set to true, the dropdown turns red.',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  value: 'Use this to disable the dropdown if needed.',
                },
                {
                    name: 'selectedOption',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the dropdown is changed. It takes one argument, which is a click event.',
                },
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                ariaLabel = 'Drop Down Aria Label'
                id = 'DropDownExample'
                dataAutoId = 'testingID'
                (selectedOption) = 'handleEvent($event)'>
            </app-drop-down>
        `,
        props,
    }))
    .add('Hint', () => ({
        template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                id = 'DropDownExample'
                hintMessage = 'Please choose a response'
                dataAutoId = 'testingID'
                (selectedOption) = 'handleEvent($event)'>
            </app-drop-down>
        `,
        props,
    }))
    .add('Error', () => ({
        template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                id = 'DropDownExample'
                errorMessage = 'Please input correct response'
                [error] = true
                dataAutoId = 'testingID'
                (selectedOption) = 'handleEvent($event)'>
            </app-drop-down>
        `,
        props,
    })).add('Selected Option', () => ({
        template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                id = 'DropDownExample'
                dataAutoId = 'testingID'
                [defaultSelected] = 2
                (selectedOption) = 'handleEvent($event)'>
            </app-drop-down>
        `,
        props,
    }))
    .add('Disabled', () => ({
      template: `
          <app-drop-down
              [options] = 'dropDownData'
              [disabled]='"true"'
              labelName = 'Drop down example'
              selectClass = 'ds-c-field--medium'
              ariaLabel = 'Drop Down Aria Label'
              id = 'DropDownExample'
              dataAutoId = 'testingID'
              (selectedOption) = 'handleEvent($event)'>
          </app-drop-down>
      `,
      props,
  }));
