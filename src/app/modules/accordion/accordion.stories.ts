import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppAccordionComponent } from './accordion.component';
import { AppPanelComponent } from '../panel/panel.component';
import { AppPlusComponent } from '../plus/plus.component';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Accordian', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppAccordionComponent, AppPanelComponent, AppPlusComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            <h1>Import</h1>
            <pre>
                import &#123; AccordionModule &#125; from '@bellese/angular-design-system';
            </pre>
            <h1>NgModule</h1>
            <p>Add <code>AccordionModule</code> to the <code>imports</code> section of your NgModule definition
            <h1>Parameters</h1>
            <p>
                The accordian component does not take any parameters.  It is an HTML tag that wraps around a
                set of panel components, to keep communication between panels.
                For example if you open one panel the other will close. If you want the panels to open
                independent of each other dont wrap the panels in an app-accordion tag.
            </p>
        `
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

