import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { PopoverComponent } from './popover.component';
import { mdePopoverPositionXEnum, mdePopoverPositionYEnum, PopoverItemModel, PopoverModel } from './popover.model';
import { PopoverModule } from './popover.module';

const popoverModel = new PopoverModel({
  items: [
    new PopoverItemModel({
      label: 'Item',
      onClick: () => {
        console.log('INLINE FUNCTION CALL');
      },
    }),
    new PopoverItemModel({
      label: 'Menu Item 2',
      url: 'https://www.google.com',
    }),
    new PopoverItemModel({
      label: 'Menu Item 3',
      onClick: defaultProps.handleEvent,
    }),
  ],
});

const popoverModelUtility = {
  ...popoverModel,
  showArrow: false,
  label: null,
  mdePopoverPositionX: mdePopoverPositionXEnum.AFTER,
  mdePopoverPositionY: mdePopoverPositionYEnum.ABOVE,
};

const popoverModelButtonClass = {
  ...popoverModel,
  buttonClass: 'ds-u-color--primary',
};

const popoverModelScrolling = {
  ...popoverModel,
  items: [
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
    ...popoverModel.items,
  ],
};

const props = {
  ...defaultProps,
  popoverModel,
  popoverModelUtility,
  faEllipsisV,
  popoverModelButtonClass,
  popoverModelScrolling,
};

export default {
  title: 'Components/Popover',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, PopoverModule, BrowserAnimationsModule],
    }),
  ],
  component: PopoverComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
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
        modules: ['PopoverModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
      {
        modules: ['BrowserAnimationsModule'],
        file: '@angular/platform-browser/animations',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'popoverModel',
        type: 'PopoverModel',
        value: `Use this to override the component's default settings.`,
        properties: [
          {
            name: 'id',
            type: 'string',
            value: 'The id for the popover component',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            value: 'Use this to further specify the popover component to the screen reader',
            default: 'Activate enter key to open popover',
          },
          {
            name: 'ariaLiveTextOpen',
            type: 'string',
            value: 'This will be read to the user when the popover menu is opened.',
            default: 'The popover menu has been opened',
          },
          {
            name: 'ariaLiveTextClosed',
            type: 'string',
            value: 'This will be read to the user when the popover menu is closed.',
            default: 'The popover menu has been closed',
          },
          {
            name: 'buttonClass',
            type: 'string',
            value: 'A class that will get added to the button that a user clicks to open the popover.',
            default: 'ds-u-color--base',
          },
          {
            name: 'icon',
            type: 'IconDefinition',
            value:
              'This is a FontAwesome icon that can show before the label.  If no icon or label is specified, the elements inside of the component will be used as ng-content.',
          },
          {
            name: 'label',
            type: 'string',
            value:
              'This is the word or phrase that will show in the popover button. If no icon or label is specified, the elements inside of the component will be used as ng-content.',
          },
          {
            name: 'showArrow',
            type: 'boolean',
            value: 'Hide or show the expand/collapse arrow.  Default value is true',
          },
          {
            name: 'mdePopoverPositionX',
            type: 'mdePopoverPositionXEnum',
            value:
              'Display the popover menu to the before or after of the button that is used to trigger the popover menu.  Available options are mdePopoverPositionXEnum.BEFORE or mdePopoverPositionXEnum.AFTER.  Default value is mdePopoverPositionXEnum.BEFORE. This value may be ignored if there is no space on the screen to position the menu as specified.',
          },
          {
            name: 'mdePopoverPositionY',
            type: 'mdePopoverPositionYEnum',
            value:
              'Display the popover menu to the above or below of the button that is used to trigger the popover menu.  Available options are mdePopoverPositionYEnum.ABOVE or mdePopoverPositionYEnum.BELOW.  Default value is mdePopoverPositionYEnum.BELOW. This value may be ignored if there is no space on the screen to position the menu as specified.',
          },
          {
            name: 'dataAutoId',
            type: 'string',
            value: 'Use this for testing ID',
          },
          {
            name: 'items',
            type: 'array of PopoverItemModels',
            value: 'Use this to further specify the popover component to the screen reader',
            properties: [
              {
                name: 'id',
                type: 'string',
                value: 'The id for the popover component',
              },
              {
                name: 'ariaLabel',
                type: 'string',
                value: 'Use this to further specify the popover component to the screen reader',
              },
              {
                name: 'label',
                type: 'string',
                value: 'This is the word or phrase that will show in the popover button.',
              },
              {
                name: 'dataAutoId',
                type: 'string',
                value: 'Use this for testing ID',
              },
              {
                name: 'url',
                type: 'string',
                value:
                  'The URL of the page that the user will see when they click this item.  Currently the component only supports full page redirects to a url, but more options can be added as needed.',
              },
              {
                name: 'icon',
                type: 'IconDefinition',
                value: 'This is a FontAwesome icon that can show after the item label.',
              },
            ],
          },
        ],
      },
    ],
    notes: [],
  },
});

export const Normal: Story<PopoverComponent> = () => ({
  template: `
            <app-popover
                [popoverModel] = 'popoverModel'>
            </app-popover>
        `,
  props,
});

export const UtilityMenu: Story<PopoverComponent> = () => ({
  template: `
            <app-popover [popoverModel] = 'popoverModelUtility'>
                <fa-icon [icon]="faEllipsisV"></fa-icon>
            </app-popover>
        `,
  props,
});
export const OverrideTextColorInButton: Story<PopoverComponent> = () => ({
  template: `
            <app-popover
              [popoverModel] = 'popoverModelButtonClass'>
            </app-popover>
        `,
  props,
});
export const ScrollingContent: Story<PopoverComponent> = () => ({
  template: `
            <app-popover
              [popoverModel] = 'popoverModelScrolling'>
            </app-popover>
        `,
  props,
});
