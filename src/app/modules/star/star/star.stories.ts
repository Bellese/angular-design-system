import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../../stories/component-intro.component';
import { StoriesModule } from '../../../../stories/stories.module';
import { StarModule } from '../star.module';
import { StarComponent } from './star.component';

export default {
  title: 'Components/Star',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, StarModule],
    }),
  ],
  component: StarComponent,
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
        modules: ['StarModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'fill',
        type: 'boolean',
        value: 'Display the star as filled or empty',
      },
      {
        name: 'rating',
        type: 'number',
        value: 'The rating of the set of stars you are showing. This is used for screen readers.',
      },
      {
        name: 'starAmount',
        type: 'numbrer',
        value: 'The total amount of stars you are showing. This is used for screen readers.',
      },
      {
        name: 'index',
        type: 'number',
        // tslint:disable-next-line: max-line-length
        value:
          'The index of the star in the set of stars that you are showing.  The screen reader message will only be availabler for the first star, if the indesx is 0.',
      },
      {
        name: 'height',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'This is the height of the star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
      },
      {
        name: 'width',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'This is the width of the star that\'s shown. Default value is "30px".  Make sure you specify px at the end of the value that you pass into this component',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
    ],
  },
});

export const Normal: Story<StarComponent> = () => ({
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
});
