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
                    name: 'tabsData',
                    type: 'array',
                    value: 'An array of objects that represents tabs',
                }
            ],
            notes: [
                'Expected format for \'tabs\'',
                `<pre>
[
    {
        title: 'tab1',
        ariaLabel: 'tab1 hello',
        onClick: this.tabSelected.bind(this)
    },
    {
        title: 'tab2',
        ariaLabel: 'tab1 yellow',
        onClick: this.tabSelected.bind(this)
    },
    {
        title: 'tab3',
        ariaLabel: 'tab3 mellow',
        onClick: this.tabSelected.bind(this)
    }
];
                </pre>`,
            ]
        },
    }))
    .add('Normal', () => ({
        template: `
            <app-tabs 
                [tabsData]="tabs">
            </app-tabs>
        `,
        props
    }));