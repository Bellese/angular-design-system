import { storiesOf } from '@storybook/angular';

import { StarRatingComponent } from './star-rating.component';
import { StarComponent } from '../star/star.component';

const moduleMetadata = {
    declarations: [StarComponent, StarRatingComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Star Rating', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-star-rating
                dataAutoId = 'testingID'
                [width]="'100px'"
                [height]="'100px'"
                [starAmount]="5"
                [rating]="2">
            </app-star-rating>
        `,
        props
    }));