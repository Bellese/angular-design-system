import { moduleMetadata, Story } from '@storybook/angular';
import { StoriesModule } from '../../../../stories/stories.module';
import { Meta } from '@storybook/angular/types-6-0';
import { StarModule } from '../star.module';
import { StarRatingComponent } from './star-rating.component';
import ComponentIntroComponent from '../../../../stories/component-intro.component';

export default {
  title: 'Components/Star Rating',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, StarModule],
    }),
  ],
  component: StarRatingComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
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
        value:
          'This is the amount of stars you want displayed, this is defaulted to 5 so unless you need more than 5 you will not need to pass anything for this input',
      },
      {
        name: 'rating',
        type: 'number',
        // tslint:disable-next-line: max-line-length
        value:
          'This is the amount of stars that will be filled. For example, a starAmount of 5 with a rating of 2 is 2 out of 5 stars',
      },
      {
        name: 'height',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'This is the height of each star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
      },
      {
        name: 'width',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'This is the width of each star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
      },
    ],
  },
});

export const Normal: Story<StarRatingComponent> = () => ({
  template: `
            <app-star-rating
                dataAutoId = 'testingID'
                [width]="'100px'"
                [height]="'100px'"
                [starAmount]="5"
                [rating]="2">
            </app-star-rating>
        `,
});
