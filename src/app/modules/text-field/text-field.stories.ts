// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { TextFieldModule } from './text-field.module';

storiesOf('Components|Text Field', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, TextFieldModule],
    })
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
          modules: ['TextFieldModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
      ],
      parameters: [
        {
          name: 'title',
          type: 'string',
          value: 'Used as the label for the input field',
        },
        {
          name: 'ariaLabel',
          type: 'string',
          value: 'Use this to further specify button to the screen reader',
        },
        {
          name: 'id',
          type: 'string',
          value: 'Used as a unique id for this field',
        },
        {
          name: 'defaultValue',
          type: 'string',
          value: 'The string that appears in the textbox upon load',
        },
        {
          name: 'inputClass',
          type: 'string',
          value: 'A class for the input field itself',
        },
        {
          name: 'inputType',
          type: 'string',
          value: 'A type for the input element.  Default: text',
        },
        {
          name: 'labelClass',
          type: 'string',
          value: 'A class for the label',
        },
        {
          name: 'hint',
          type: 'string',
          value: 'A value used to display a hint above the text field',
        },
        {
          name: 'hintClass',
          type: 'string',
          value: 'A class for the hint',
        },
        {
          name: 'errorMessage',
          type: 'string',
          value:
            'A value used to display an error above the text field. If set, the input will be styled with an error class.',
        },
        {
          name: 'placeholder',
          type: 'string',
          value: 'A value to show as the a placeholder for the text field.',
        },
        {
          name: 'dataAutoId',
          type: 'string',
          value: 'Use this for testing ID',
        },
        {
          name: 'userInput',
          type: 'function',
          value: 'Tap into the user enter event',
        },
        {
          name: 'multiline',
          type: 'boolean',
          value: 'Enable multiline text field',
        },
        {
          name: 'disabled',
          type: 'boolean',
          value: 'Disable the text field',
        },
      ],
    },
  }))
  .add('Normal', () => ({
    template: `
            <app-text-field
                title = 'Text Field Title'
                ariaLabel = 'Text Field Aria Label'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                placeholder = 'Placeholder Text'
                dataAutoId = 'testingID'
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
    props: defaultProps,
  }))
  .add('Password', () => ({
    template: `
            <app-text-field
                title = 'Text Field Title'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                inputType = 'password'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                dataAutoId = 'testingID'
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
    props: defaultProps,
  }))
  .add('Error', () => ({
    template: `
            <app-text-field
                title = 'Text Field Title'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                inputType = 'text'
                labelClass = 'ds-u-color--base'
                errorMessage = 'This is an error message'
                dataAutoId = 'testingID'
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
    props: defaultProps,
  }))
  .add('Disabled', () => ({
    template: `
            <app-text-field
                title = 'Text Field Title'
                ariaLabel = 'Text Field Aria Label'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                placeholder = 'Placeholder Text'
                dataAutoId = 'testingID'
                [disabled] = "true"
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
    props: defaultProps,
  }))
  .add('Multiline', () => ({
    template: `
            <app-text-field
                title = 'Text Field Title'
                ariaLabel = 'Text Field Aria Label'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                placeholder = 'Placeholder Text'
                dataAutoId = 'testingID'
                multiline = 'true'
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
    props: defaultProps,
  }));
