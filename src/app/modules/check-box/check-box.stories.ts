import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppCheckBoxComponent } from './check-box.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';


storiesOf('Components|Check Box', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCheckBoxComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['CheckBoxModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'index',
                    type: 'string',
                    value: 'This will allow you find the unique checkbox within the whole group',
                },
                {
                    name: 'value',
                    type: 'string',
                    value: 'Value is what the checkbox represents when clicked, and is read by screen readers',
                },
                {
                    name: 'groupName',
                    type: 'string',
                    value: 'The name that each checkbox will fall under, to help you scope this group',
                },
                {
                    name: 'showTitle',
                    type: 'boolean',
                    value: 'Enable or Disable the component label',
                },
                {
                    name: 'labelClass',
                    type: 'string',
                    value: 'Class to style the label',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'Operating similarly to button, Checkbox is a reusable component, but there are currently limitations. Design.CMS.gov has a component for a checkbox. Styling looks great but you can’t capture the event and have it operate as expected with html, more details to come. Currently, no event emitted because we may need to scope this out with raw javascript and grab the set by the id and reference the checked prototype.'
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-check-box
                index = 0
                value = 'checkboxExample'
                groupName = 'checkboxtoendallcheckbox'
                [showTitle] = true
                labelClass = 'checkboxEx'
                dataAutoId = 'testingID'>
            </app-check-box>
        `,
        props: defaultProps
    }));
