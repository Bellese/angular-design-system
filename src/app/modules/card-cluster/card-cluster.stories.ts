// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { CardClusterModule } from './card-cluster.module';

// Models
import { CardClusterModel } from './card-cluster.models';

// Missc
import { faEye, faUserShield } from '@fortawesome/free-solid-svg-icons';

const cardClusterDataNormal = new CardClusterModel({
  mainCard: true,
  mainTitle: 'STK-2',
  mainSub: 'Episodes',
  ariaLabel: 'Activate enter button to view all items',
  buttonClicked: 'CardCluster0',
  cluster: [
    {
      value: 'vte',
      name: 'IPP Not Met',
      ariaLabel: 'Activate enter to view all items for the IPP Not Met category',
    },
    {
      value: 'cbc',
      name: 'IPP Met',
    },
    {
      value: 1,
      name: 'Denominator',
    },
    {
      value: 16,
      name: 'Denominator',
    },
    {
      value: 85,
      name: 'Numerator',
    },
    {
      value: 3,
      name: 'Den. Exceptions',
    },
    {
      classValue: 'viewPerformanceIcon',
      classButton: 'vpi',
      name: 'View Performance',
      className: 'vpi',
    },
  ],
});

const cardClusterDataWithoutMain = {
  ...cardClusterDataNormal,
  mainCard: false,
  buttonClicked: 'CardCluster1',
};

const cardClusterDataWithoutMiniCards = {
  ...cardClusterDataNormal,
  cluster: [],
};

const cardClusterDataSelectedCard = {
  ...cardClusterDataNormal,
  buttonClicked: 'CardCluster4',
};

const cardClusterResizeTimeout = {
  ...cardClusterDataNormal,
  resizeTimeout: 1,
};

const cardClusterDataSetTotal = {
  ...cardClusterDataNormal,
  total: 9999,
};

const cardClusterDataShowRadioButtons = {
  ...cardClusterDataNormal,
  showRadioButton: true,
};

const cardClusterDataShowRadioButtonsAndIcons = new CardClusterModel({
  mainCard: false,
  showRadioButton: true,
  rowMaxItems: 2,
  cluster: [
    {
      value: 'Basic User',
      name: 'A Basic User is an Organization Role with Read/Write Access to the Organization(s) in their system.',
      valueIcon: faEye,
      ariaLabel: 'Activate enter to select Basic User',
      classButton: 'ds-u-padding--2',
    },
    {
      value: 'Security Administrator',
      name: 'A Security Administrator is a person who manages User Roles & Permissions for their Organization.',
      valueIcon: faUserShield,
      ariaLabel: 'Activate enter to select Security Administrator',
      classButton: 'ds-u-padding--2',
    },
  ],
});

const cardClusterDataDisabledCards = cardClusterDataShowRadioButtons;
cardClusterDataDisabledCards.cluster[2].disabled = true;
cardClusterDataDisabledCards.cluster[3].disabled = true;

const props = {
  ...defaultProps,
  cardClusterDataNormal,
  cardClusterDataWithoutMain,
  cardClusterDataWithoutMiniCards,
  cardClusterDataSelectedCard,
  cardClusterResizeTimeout,
  cardClusterDataSetTotal,
  cardClusterDataShowRadioButtons,
  cardClusterDataShowRadioButtonsAndIcons,
  cardClusterDataDisabledCards,
};

storiesOf('Components/Card Cluster', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, CardClusterModule],
      declarations: [],
    })
  )
  .add('Intro', () => ({
    template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
    props: {
      imports: [
        {
          modules: ['CardClusterModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
      ],
      parameters: [
        {
          name: 'cardArray',
          type: 'CardClusterModel',
          value: 'A javascript object that contains all information needed to display the card cluster.',
          properties: [
            {
              name: 'mainCard',
              type: 'boolean',
              value: 'Hide or show the main card on the left side of the cluster',
            },
            {
              name: 'mainTitle',
              type: 'string',
              optional: true,
              value: 'The title to show in the main card',
            },
            {
              name: 'mainTitleIcon',
              type: 'IconDefinition',
              optional: true,
              value: 'A FontAwesome icon to show with the main title',
            },
            {
              name: 'mainSub',
              type: 'string',
              optional: true,
              value: 'The subtitle to show in the main card',
            },
            {
              name: 'total',
              type: 'number | string',
              optional: true,
              // tslint:disable-next-line: max-line-length
              value:
                'The total to show in the main card.  Leave blank to calculate based on the sum of all values in the cluster.',
            },
            {
              name: 'ariaLabel',
              type: 'string',
              optional: true,
              value: 'Use this to further specify main card to the screen reader.  Leave blank to use mainTitle value.',
            },
            {
              name: 'rowMaxItems',
              type: 'number',
              optional: true,
              // tslint:disable-next-line: max-line-length
              value:
                'The maximum amount of cards to show in a cluster row.  Leave blank to set to the minimum value of either 4 or half of the total cards in the cluster.',
            },
            {
              name: 'showRadioButton',
              type: 'boolean',
              value: 'Hide or show radio buttons inside of the cards',
            },
            {
              name: 'buttonClicked',
              type: 'string',
              optional: true,
              value: 'Specify which button should be selected by default.',
            },
            {
              name: 'dataAutoId',
              type: 'string',
              value: 'Use this for testing ID',
            },
            {
              name: 'cluster',
              type: 'CardClusterClusterModel[]',
              value: 'An array of values used to define the cards inside the cluster.',
              properties: [
                {
                  name: 'name',
                  type: 'string',
                  value: 'The name to show in the card inside the cluster',
                },
                {
                  name: 'value',
                  type: 'number | string',
                  value: 'The value to show in the card inside the cluster',
                },
                {
                  name: 'nameIcon',
                  type: 'IconDefinition',
                  optional: true,
                  value: "A FontAwesome icon to show with the card's name",
                },
                {
                  name: 'valueIcon',
                  type: 'IconDefinition',
                  optional: true,
                  value: "A FontAwesome icon to show with the card's value",
                },
                {
                  name: 'ariaLabel',
                  optional: true,
                  type: 'string',
                  // tslint:disable-next-line: max-line-length
                  value:
                    "Use this to further specify main card to the screen reader.  Leave blank to use the card's name.",
                },
                {
                  name: 'classButton',
                  optional: true,
                  type: 'string',
                  value: 'A class to apply to the element that contains the card',
                },
                {
                  name: 'classValue',
                  optional: true,
                  type: 'string',
                  value: "A class to apply to the element that contains the card's value",
                },
                {
                  name: 'className',
                  optional: true,
                  type: 'string',
                  value: "A class to apply to the element that contains the card's name",
                },
                {
                  name: 'disabled',
                  default: false,
                  type: 'boolean',
                  value: 'If set to false, this card will display as disabled and will not be clickable',
                },
              ],
            },
          ],
        },
      ],
      notes: [],
    },
  }))
  .add('Normal', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataNormal"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Without Main Card', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMain"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('No Mini Cards', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMiniCards"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Selected Card', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataSelectedCard"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Change resize timeout', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterResizeTimeout"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Set Total', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataSetTotal"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Show Radio Buttons', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataShowRadioButtons"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Show Radio Buttons and Icons', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataShowRadioButtonsAndIcons"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }))
  .add('Disabled Cards', () => ({
    template: `
            <app-card-cluster
                [cardArray]="cardClusterDataDisabledCards"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
    props,
  }));
