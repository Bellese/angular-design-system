import { storiesOf, moduleMetadata } from '@storybook/angular';

import { StarRatingComponent } from './star-rating.component';
import { StarComponent } from '../star/star.component';

storiesOf('Components|Star Rating', module)
    .addDecorator(
        moduleMetadata({
            declarations: [StarComponent, StarRatingComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-star-rating
                dataAutoId = 'testingID'
                [width]="'100px'"
                [height]="'100px'"
                [starAmount]="5"
                [rating]="2">
            </app-star-rating>
        `,
    }));