import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppPanelComponent } from './panel.component';
import { AppPlusComponent } from '../plus/plus.component';
import { AppButtonComponent } from '../button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Panel', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppPanelComponent, AppButtonComponent, AppPlusComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            The panel component takes the following parameters:
        `,
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




