import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppAccordionComponent } from './accordion.component';
import { AppPanelComponent } from '../panel/panel.component';
import { AppPlusComponent } from '../plus/plus.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Accordian', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppAccordionComponent, AppPanelComponent, AppPlusComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-compoennt-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-compoennt-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['AccordionModule', 'PanelModule', 'PlusModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
                {
                    modules: ['BrowserAnimationsModule'],
                    file: '@angular/platform-browser/animations',
                    ngmodule: 'imports',
                },
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'The accordian component does not take any parameters.  It is an HTML tag that wraps around a set of panel components, to keep communication between panels. For example if you open one panel the other will close. If you want the panels to open independent of each other dont wrap the panels in an app-accordion tag.',
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-accordion>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='Accordion Example'
                    extTitleClass = 'customizeExtra'
                    dataAutoId = 'dataID'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false>
                    <span>
                        Additional Title
                    </span>
                    <div>
                        Content Structure
                    </div>
                </app-panel>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='Accordion Example'
                    extTitleClass = 'customizeExtra'
                    dataAutoId = 'dataID'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false>
                    <span>
                        Additional Title 2
                    </span>
                    <div>
                        Content Structure 2
                    </div>
                </app-panel>
            </app-accordion>
        `,
        props: defaultProps
    }));

