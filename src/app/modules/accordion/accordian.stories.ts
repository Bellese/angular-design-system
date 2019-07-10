import { storiesOf } from '@storybook/angular';

import { AppAccordionComponent } from './accordion.component';
import { AppPanelComponent } from '../panel/panel.component';
import { AppPlusComponent } from '../plus/plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Accordian', module)
    .add('Normal', () => ({
        moduleMetadata: {
            declarations: [AppAccordionComponent, AppPanelComponent, AppPlusComponent],
            imports: [BrowserAnimationsModule],
        },
        template: `
            <app-accordion>
                <app-panel
                    (panelClick) = "announce($event)"
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
                    (panelClick) = "announce($event)"
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
        props
    }));

