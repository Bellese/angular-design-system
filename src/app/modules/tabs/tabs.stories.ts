import { storiesOf , moduleMetadata} from '@storybook/angular';

import { AppTabsComponent } from './tabs.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps, handleEvent } from '../../../../.storybook/helpers';

const tabs = [
    {
        title: 'tab1',
        ariaLabel: 'tab1 hello',
    },
    {
        title: 'tab2',
        ariaLabel: 'tab1 yellow',
    },
    {
        title: 'tab3',
        ariaLabel: 'tab3 mellow',
    }
];

const props = {
    ...defaultProps,
    tabs
}

storiesOf('Components|Tabs', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTabsComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    name: 'tabs',
                    type: 'array',
                    value: 'An array of objects that represents tabs',
                },
                {
                    name: 'defaultSelectedId',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'The ID of the tab that should be selected by default.  If nothing is passed on, the first tab is selected by default.',
                },
                {
                    name: 'tablistClassName',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this to add classes to tab container. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
                },
                {
                    name: 'onChange',
                    type: 'array',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when a tab is clicked. It takes one argument, which is a click event.',
                },
            ],
            notes: [
                'Expected format for \'tabs\'',
                `<pre>
[
    {
        id: 'tab1'.
        title: 'tab1',
        ariaLabel: 'tab1 hello',
    },
    {
        id: 'tab1'.
        title: 'tab2',
        ariaLabel: 'tab1 yellow',
    },
    {
        id: 'tab3',
        title: 'tab3',
        ariaLabel: 'tab3 mellow',
    }
];
                </pre>`,
            ]
        },
    }))
    .add('Normal', () => ({
        template: `
            <app-tabs
                [tabs]="tabs"
                defaultSelectedId="tab2"
                (onChange)="handleEvent($event)">
            </app-tabs>
        `,
        props
    }));