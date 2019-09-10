import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppPanelComponent } from './panel.component';
import { AppPlusComponent } from '../plus/plus.component';
import { AppButtonComponent } from '../button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Panel', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppPanelComponent, AppButtonComponent, AppPlusComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [BrowserAnimationsModule],
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
                    modules: ['PanelModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
                {
                    modules: ['BrowserAnimationsModule'],
                    file: '@angular/platform-browser/animations',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'title',
                    type: 'string',
                    value: 'Use to name each accordion panel',
                },
                {
                    name: 'titleClass',
                    type: 'string',
                    value: 'Use to override the default class for a panel title bar.  If you use this parameter, most default styles will be removed.  The defaults are: \'ds-u-fill--primary-darker ds-u-color--white\'',
                },
                {
                    name: 'extTitle',
                    type: 'string',
                    value: 'Use to add supplimental information to each panel. Goes to the right of the main title and inline with it',
                },
                {
                    name: 'extTitleClass',
                    type: 'string',
                    value: 'Use this to add different classes to change the look and feel of each ext title',
                },
                {
                    name: 'expand',
                    type: 'boolean',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this only to set a main panel to open on load. For example if I want the first panel to be set to open I will add expand=true to panel',
                },
                {
                    name: 'expandedClass',
                    type: 'string',
                    value: 'Use to override the default class for panel once it\'s expanded.  If you use this parameter, most default styles will be removed.  The defaults are: \'ds-u-border-top--0 ds-u-border--1 ds-u-padding--2\'',
                },
                {
                    name: 'openAll',
                    type: 'boolean',
                    // tslint:disable-next-line: max-line-length
                    value: 'Same concept as expand. Use this input on all panels to make each one open. Its optional: we use it when a search is open on the panels, we set openAll to true on each panel',
                },
                {
                    name: 'panelClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the panel is clicked. It takes one argument, which is a click event',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ],
            notes: [
                'Additionally you can use templating to add more content to the panels.  For example if you want to add extra content to be right aligned just wrap that content in a span tag. And if you want content to show when you open the panel just add that content to a div tag.',
                `Example:<pre>
&lt;app-panel
    (panelClick) = "announce($event)"
    title ='Accordion Example'
    extTitleClass = 'customizeExtra'
    dataAutoId = 'dataID'
    [extTitle] = true
    [expand] = false
    [openAll] = false&gt;
    &lt;span&gt;
    Additional Title
    &lt;/span&gt;
    &lt;div&gt;
    Content on panel open
    &lt;/div&gt;
&lt;/app-panel&gt;
                </pre>`
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
            >
                <span>
                    Additional Title
                </span>
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
        props: defaultProps
    }));




