import { faEye, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppCardClusterComponent } from './card-cluster.component';
import { CardClusterModel } from './card-cluster.models';
import { CardClusterModule } from './card-cluster.module';

// NOTE: when running the storybook on localhost, you may find that while running
// from the "Docs" view, the cards eventually stop rendering. This is a known issue.
// The current implementatinon of Card Cluster, and the Stories here, do not ensure that
// every `id` is unique. Whether that's a root cause for this Storybook behavior, it would
// be a great enhancement.
//
// Either way, the workaround with Storybook is to stay in the "Canvas" view, and view each
// story individually.
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

const cardClusterDataLongNameWithCustomStyle = {
  ...cardClusterDataNormal,
  mainTitle: 'Safe Use of Opioids',
  mainTitleClass: 'ds-u-font-size--h2'
}

const cardClusterDataShowRadioButtonsAndIcons = new CardClusterModel({
  mainCard: false,
  showRadioButton: true,
  rowMaxItems: 2,
  clusterIdPrefix: 'userSelectCard',
  cluster: [
    {
      value: 'Basic User',
      name: 'A Basic User is an Organization Role with Read/Write Access to the Organization(s) in their system.',
      valueIcon: faEye,
      ariaLabel: 'Activate enter to select Basic User',
      ariaDescribedByName: true,
      classButton: 'ds-u-padding--2',
    },
    {
      value: 'Security Administrator',
      name: 'A Security Administrator is a person who manages User Roles & Permissions for their Organization.',
      valueIcon: faUserShield,
      ariaLabel: 'Activate enter to select Security Administrator',
      ariaDescribedByName: true,
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
  cardClusterDataLongNameWithCustomStyle,
};

export default {
  title: 'Components/Card Cluster',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, CardClusterModule],
    }),
  ],
  component: AppCardClusterComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
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
            name: 'clusterIdPrefix',
            type: 'string',
            optional: true,
            // tslint:disable-next-line: max-line-length
            value:
              'NOTE: Overrides card cluster array item `id` field. This is a common string prefix to be enumerated in each cluster card element id. I.e. `role` for an array of 2 cards would generate ids `role1, role2`. Leaving blank will use `CardCluster` as the prefix.',
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
                name: 'id',
                type: 'string',
                optional: true,
                value: 'NOTE: This is overridden when using `clusterIdPrefix`. Manually define the card element id. ',
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
                name: 'ariaDescribedByName',
                type: 'string',
                optional: true,
                // tslint:disable-next-line: max-line-length
                value:
                  'Allows `name` text to get read by a screen reader in addition to `ariaLabel`. Best used when a card has lengthy extra text provided by `name`, or when you want that text',
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
});

export const Normal: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataNormal"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const WithoutMainCard: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataWithoutMain"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const NoMiniCards: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataWithoutMiniCards"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const SelectedCard: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataSelectedCard"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const ChangeResizeTimeout: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterResizeTimeout"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const SetTotal: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataSetTotal"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const ShowRadioButtons: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataShowRadioButtons"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const ShowRadioButtonsAndIcons: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataShowRadioButtonsAndIcons"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const DisabledCards: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataDisabledCards"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});

export const LongNameCustomTitleClass: Story<AppCardClusterComponent> = () => ({
  template: `
    <app-card-cluster
      [cardArray]="cardClusterDataLongNameWithCustomStyle"
      (passButton)="handleEvent($event)">
    </app-card-cluster>
  `,
  props,
});
