import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppPlusComponent } from './plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Plus', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppPlusComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Plus', () => ({
        template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = false
                    [clicked] = false >
                </app-plus>
            </div>
        `,
    })).add('Minus', () => ({
        template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = true
                    [clicked] = true >
                </app-plus>
            </div>
        `,
    }));