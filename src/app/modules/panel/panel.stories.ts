import { storiesOf } from '@storybook/angular';

import { AppPanelComponent } from './panel.component';
import { AppPlusComponent } from '../plus/plus.component';
import { AppButtonComponent } from '../button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const moduleMetadata = {
    declarations: [AppPanelComponent, AppButtonComponent, AppPlusComponent],
    imports: [BrowserAnimationsModule],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Panel', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-panel
                (panelClick) = "announce($event)"
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
        props
    }));




