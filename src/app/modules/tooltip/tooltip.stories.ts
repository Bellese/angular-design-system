// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { TooltipModule } from './tooltip.module';
import { TooltipModel, TooltipPlacementEnum, TooltipTriggerTypeEnum } from './tooltip.models';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const tooltipModel: TooltipModel = new TooltipModel({
  id: 'tooltipLink',
  triggerType: TooltipTriggerTypeEnum.LINK,
  triggerContent: 'hover or click me!',
  tooltipContent: 'hey this is my content!',
  ariaLabel: 'this is my aria label',
  placement: TooltipPlacementEnum.RIGHT,
});

const tooltipModelButton = {
  ...tooltipModel,
  triggerType: TooltipTriggerTypeEnum.BUTTON,
  triggerClass: 'ds-c-button--primary',
};

const tooltipModelInversed = {
  ...tooltipModel,
  inversed: true,
  triggerClass: 'ds-u-color--white',
};

const tooltipModelIcon = {
  ...tooltipModel,
  triggerType: TooltipTriggerTypeEnum.BUTTON,
  triggerContent: 'Look at my icon!',
  triggerClass: 'ds-c-button--primary',
  triggerIcon: faQuestionCircle,
};

const tooltipModelIconOnly = {
  ...tooltipModel,
  triggerType: TooltipTriggerTypeEnum.BUTTON,
  triggerContent: '',
  triggerClass: 'ds-c-button--transparent ds-u-padding-x--0',
  triggerIcon: faQuestionCircle,
};

const props = {
  ...defaultProps,
  tooltipModel,
  tooltipModelButton,
  tooltipModelInversed,
  tooltipModelIcon,
  tooltipModelIconOnly,
};

storiesOf('Components/Tooltip', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, TooltipModule],
    })
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
          modules: ['TooltipModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
      ],
      parameters: [
        {
          name: 'tooltipModel',
          type: 'tooltipModel',
          value: 'An object that defines how the tooltip displays',
          properties: [
            {
              name: 'ariaLabel',
              type: 'string',
              value: 'Used as the aria label for the tooltip trigger',
            },
            {
              name: 'id',
              type: 'string',
              value: 'A unique identifier used for both the trigger and tooltip',
            },
            {
              name: 'inversed',
              type: 'boolean',
              value:
                'Use this setting to use the inversed theme to make sure the tooltip is visible on a dark background.',
            },
            {
              name: 'maxWidth',
              type: `number | 'none'`,
              value: 'Use this setting to set a maximum width on the tooltip.',
              default: 'none',
            },
            {
              name: 'offset',
              type: 'number[]',
              value:
                'Use this to set the skew and distance offset for the tooltip from the trigger.  See more info here: https://atomiks.github.io/tippyjs/v6/all-props/#offset',
            },
            {
              name: 'placement',
              type: 'TooltipPlacementEnum',
              value: 'Use this to specify the placement of the tooltip in relation to the trigger element',
              options: TooltipPlacementEnum,
              default: 'TooltipPlacementEnum.AUTO',
            },
            {
              name: 'transitionDuration',
              type: 'number',
              value: 'The number of milliseconds for the tooltip to fade in and appear',
            },
            {
              name: 'triggerType',
              type: 'TooltipTriggerTypeEnum',
              value: 'The type of trigger element',
              options: TooltipTriggerTypeEnum,
              default: 'TooltipTriggerTypeEnum.LINK',
            },
            {
              name: 'triggerContent',
              type: 'string',
              value: 'The content to add to the trigger element',
            },
            {
              name: 'triggerClass',
              type: 'string',
              value: 'A css class to add to the trigger element',
            },
            {
              name: 'triggerIcon',
              type: 'IconDefinition',
              value: 'An icon to display at the beginning of the trigger element',
            },
            {
              name: 'tooltipContent',
              type: 'string',
              value: 'The content that displays inside of the tooltip',
            },
          ],
        },
      ],
    },
  }))
  .add('Normal', () => ({
    template: `
        <app-tooltip
            [tooltipModel]="tooltipModel"
        ></app-tooltip>
    `,
    props,
  }))
  .add('Button', () => ({
    template: `
        <app-tooltip
            [tooltipModel]="tooltipModelButton"
        ></app-tooltip>
    `,
    props,
  }))
  .add('Inversed', () => ({
    template: `
        <div class="ds-u-fill--primary-darkest ds-u-padding--6 ds-u-text-align--center">
            <app-tooltip
                [tooltipModel]="tooltipModelInversed"
            ></app-tooltip>
        </div>
    `,
    props,
  }))
  .add('Adding Icon', () => ({
    template: `
        <app-tooltip
            [tooltipModel]="tooltipModelIcon"
        ></app-tooltip>
    `,
    props,
  }))
  .add('Only Icon', () => ({
    template: `
        <app-tooltip
            [tooltipModel]="tooltipModelIconOnly"
        ></app-tooltip>
    `,
    props,
  }));
