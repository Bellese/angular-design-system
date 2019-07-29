import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppDatepickerComponent } from './date-picker.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';

storiesOf('Components|Date Picker', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppDatepickerComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
            <app-date-picker 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-date-picker>
        `,
    }));
