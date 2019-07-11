import { storiesOf } from '@storybook/angular';

import { AppPlusComponent } from './plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const moduleMetadata = {
    declarations: [AppPlusComponent],
    imports: [BrowserAnimationsModule],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Plus', module)
    .add('Plus', () => ({
        moduleMetadata,
        template: `
            <div style='background-color: black; padding: 2em;'><app-plus
                [expand] = false
                [clicked] = false
            ></app-plus></div>
        `,
        props
    })).add('Minus', () => ({
        moduleMetadata,
        template: `
            <div style='background-color: black; padding: 2em;'><app-plus
                [expand] = true
                [clicked] = true
            ></app-plus></div>
        `,
        props
    }));