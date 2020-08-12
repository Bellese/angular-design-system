// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../../stories/stories.module';

// Modules
import { StarModule } from '../star.module';

storiesOf('Components/Star Rating', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                StarModule,
            ]
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['StarRatingModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'starAmount',
                    type: 'number',
                    // tslint:disable-next-line: max-line-length
                    value: 'This is the amount of stars you want displayed, this is defaulted to 5 so unless you need more than 5 you will not need to pass anything for this input',
                },
                {
                    name: 'rating',
                    type: 'number',
                    // tslint:disable-next-line: max-line-length
                    value: 'This is the amount of stars that will be filled. For example, a starAmount of 5 with a rating of 2 is 2 out of 5 stars',
                },
                {
                    name: 'height',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'This is the height of each star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
                },
                {
                    name: 'width',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'This is the width of each star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
                },
            ],
        }
    }))
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