import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppDropDownComponent } from './drop-down.component';
import { DropdownModule } from './drop-down.module';

const dropDownData = [
  {
    content: 'option1',
    value: 'op1',
  },
  {
    content: 'option2',
    value: 'op2',
  },
  {
    content: 'option3',
    value: 'op3',
  },
  {
    content: 'option4',
    value: 'op4',
  },
  {
    content: 'option5',
    value: 'op5',
  },
  {
    content: 'option6',
    value: 'op6',
  },
];

const props = {
  ...defaultProps,
  dropDownData,
  disabled: true,
  defaultSelected: 3,
};

export default {
  title: 'Components/Drop Down',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, DropdownModule],
    }),
  ],
  component: AppDropDownComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
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
        value:
          'An array of javascript objects that have content and value properties, used to populate the dropdown options',
        properties: [
          {
            name: 'content',
            type: 'string',
            value: 'The string shown in the dropdown label',
          },
          {
            name: 'value',
            type: 'string',
            value: 'The value of the each item in the dropdown',
          },
        ],
      },
      {
        name: 'labelName',
        type: 'string',
        value: "The value that shows in the dropdown's label",
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
        value:
          'Use this to add classes to drop down. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
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
        value:
          "Use this to select an option index by default when the component loads.  Use your desired option's index from the options array (Deprecated)",
      },
      {
        name: 'defaultSelectedValue',
        type: 'string',
        value:
          "Use this to select an option (by value) by default when the component loads.  Use your desired option's index from the options array",
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
        value:
          'A javascript function that will be called when the dropdown is changed. It takes one argument, which is a click event.',
      },
      {
        name: 'control',
        type: 'formControl',
        value: 'Tracks the value and validation status of an individual form control',
      },
      {
        name: 'formlyAttributes',
        type: 'string',
        value: 'Used for ngx-formly custom component integration',
      },
      {
        name: 'alertMessageList',
        type: 'array of strings',
        value: 'Used to display one or more alerts on the form field using the Alert component',
      },
      {
        name: 'alertVariation',
        type: 'string',
        value: 'Type of alert status. Can be error, warn, or success',
      },
    ],
  },
});

export const Normal: Story<AppDropDownComponent> = () => ({
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
});

export const Hint: Story<AppDropDownComponent> = () => ({
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
});

export const Error: Story<AppDropDownComponent> = () => ({
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
});

export const SelectedOption: Story<AppDropDownComponent> = () => ({
  template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                id = 'DropDownExample'
                dataAutoId = 'testingID'
                [defaultSelected] = 2
                defaultSelectedValue = 'op4'

                (selectedOption) = 'handleEvent($event)'>
            </app-drop-down>
        `,
  props,
});

export const Disabled: Story<AppDropDownComponent> = () => ({
  template: `
          <app-drop-down
              [options] = 'dropDownData'
              [disabled]='disabled'
              labelName = 'Drop down example'
              selectClass = 'ds-c-field--medium'
              ariaLabel = 'Drop Down Aria Label'
              id = 'DropDownExample'
              dataAutoId = 'testingID'
              [defaultSelected] = defaultSelected
              (selectedOption) = 'handleEvent($event)'>
          </app-drop-down>
          <button (click)="disabled = !disabled">toggle disabled</button>
          <button (click)="defaultSelected = defaultSelected + 1">toggle disabled</button>
      `,
  props,
});
