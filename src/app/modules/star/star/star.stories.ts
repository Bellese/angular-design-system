import { storiesOf } from '@storybook/angular';

import { StarComponent } from './star.component';

const moduleMetadata = {
    declarations: [StarComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Star', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-star
                [fill] = 'true'
                rating = '5'
                starAmount = 5
                index = 0
                height = '100'
                width = '100'
                dataAutoId = 'testingID'>
            </app-star>
        `,
        props
    }));