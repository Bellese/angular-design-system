import { storiesOf , moduleMetadata} from '@storybook/angular';

import { AppTabComponent } from './tab.component';

import ComponentIntroComponent from '../../../../stories/component-intro.component';
import ParametersComponent from '../../../../stories/parameters.component';
import ImportsComponent from '../../../../stories/imports.component';
import NgModuleComponent from '../../../../stories/ngmodule.component';
import { defaultProps } from '../../../../../.storybook/helpers';

storiesOf('Components|Tab', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTabComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    modules: ['TabsModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'id',
                    type: 'string',
                    value: 'Add a unique ID to the tab',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'Used as the title for the tab',
                },
                {
                    name: 'className',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this to add classes to tab. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Used as the aria label for the tab',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Used this for testing ID',
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    value: 'Used to disable tab',
                },
                {
                    name: 'visible',
                    type: 'boolean',
                    value: 'Used to control tab visibility',
                },
                {
                    name: 'selected',
                    type: 'boolean',
                    value: 'Used to check state of tab',
                },
                {
                    name: 'onClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the tab is clicked. It takes one argument, which is a click event.',
                },
            ],
            notes: [
            ]
        },
    }))
    .add('Normal', () => ({
        template: `
            <app-tab
                dataAutoId = 'testingID'
                [id]="'tabsComp'"
                [title]="'File Upload'"
                (onClick)="handleEvent($event)">
            </app-tab>
        `,
        props: defaultProps
    }));