import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AppDropDownComponent } from './drop-down.component';
import dropDownData from '../../../assets/data/drop-down-data.json';

storiesOf('Drop Down', module)
    .add('Normal', () => ({
        component: AppDropDownComponent,
        props: {
            options: dropDownData,
            labelName: 'Drop down example',
            id: 'DropDownExample',
            dataAutoId: 'testingID',
            selectClass: 'ds-c-field--medium',
            selectedOption: action('The following value is emitted when the dropdown is changed'),
        },
    }))
    .add('Hint', () => ({
        component: AppDropDownComponent,
        props: {
            options: dropDownData,
            labelName: 'Drop down example',
            id: 'DropDownExample',
            dataAutoId: 'testingID',
            selectClass: 'ds-c-field--medium',
            hintMessage: 'Please choose a response',
            selectedOption: action('The following value is emitted when the dropdown is changed'),
        },
    }))
    .add('Error', () => ({
        component: AppDropDownComponent,
        props: {
            options: dropDownData,
            labelName: 'Drop down example with Error',
            id: 'DropDownExample',
            dataAutoId: 'testingID',
            selectClass: 'ds-c-field--medium',
            error: true,
            errorMessage: 'Please choose a correct response',
            selectedOption: action('The following value is emitted when the dropdown is changed'),
        },
    })).add('Selected Option', () => ({
        component: AppDropDownComponent,
        props: {
            options: dropDownData,
            labelName: 'Drop down example with Error',
            id: 'DropDownExample',
            dataAutoId: 'testingID',
            selectClass: 'ds-c-field--medium',
            defaultSelected: 2,
            selectedOption: action('The following value is emitted when the dropdown is changed'),
        },
    }));