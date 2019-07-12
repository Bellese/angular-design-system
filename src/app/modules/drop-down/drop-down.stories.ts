import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppDropDownComponent } from './drop-down.component';

import { defaultProps } from '../../../../.storybook/helpers';

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

storiesOf('Drop Down', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppDropDownComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-drop-down
                [options] = 'dropDownData'
                labelName = 'Drop down example'
                selectClass = 'ds-c-field--medium'
                id = 'DropDownExample'
                dataAutoId = 'testingID'
                (selectedOption) = 'handleClick($event)'>
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
                (selectedOption) = 'handleClick($event)'>
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
                (selectedOption) = 'handleClick($event)'>
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
                (selectedOption) = 'handleClick($event)'>
            </app-drop-down>
        `,
        props,
    }));
