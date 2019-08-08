import { storiesOf , moduleMetadata} from '@storybook/angular';

import { AppTabPanelComponent } from './tab-panel/tab-panel.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|TabPanel', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTabPanelComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    modules: ['TabPanelModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'id',
                    type: 'string',
                    value: 'Add a unique ID to the tab panel',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'Used as the title for the tab panel',
                },
                {
                    name: 'description',
                    type: 'string',
                    value: 'Used as the description for the tab panel',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Used as the aria label for the tab panel',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Used this for testing ID',
                },
                {
                    name: 'tabClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the tab panel is clicked. It takes one argument, which is a click event.',
                },
            ],
            notes: [
                'This component will span the width of the screen, you will need to put it in a grid layout to organize it on the page',
                'Furthermore there is an option to add any content on the right side of the box. You will see that in the example.',
            ]
        },
    }))
    .add('Normal', () => ({
        template: `
            <app-tab-panel
                dataAutoId = 'testingID'
                [id]="'tabPanelComp'"
                [title]="'File Upload'"
                [description]="'Track status and validation of EHR patients.'"
                (tabClick)="handleEvent($event)">
            </app-tab-panel>
        `,
        props: defaultProps
    }));