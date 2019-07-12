import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppAccordionComponent } from './accordion.component';
import { AppPanelComponent } from '../panel/panel.component';
import { AppPlusComponent } from '../plus/plus.component';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Accordian', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppAccordionComponent, AppPanelComponent, AppPlusComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-accordion>
                <app-panel
                    (panelClick) = "handleClick($event)"
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
                    (panelClick) = "handleClick($event)"
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

