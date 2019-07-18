import { storiesOf, moduleMetadata } from '@storybook/angular';

import { StarComponent } from './star.component';

storiesOf('Components|Star', module)
    .addDecorator(
        moduleMetadata({
            declarations: [StarComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            The star component takes the following parameters:
        `,
    }))
    .add('Normal', () => ({
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
    }));