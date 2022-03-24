import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppPanelComponent } from './panel.component';
import { PanelIconPlacementEnum, PanelTitlePlacementEnum } from './panel.models';
import { PanelModule } from './panel.module';

const props = {
  ...defaultProps,
  faChevronDown,
  faChevronUp,
  PanelIconPlacementEnum,
  PanelTitlePlacementEnum,
};

export default {
  title: 'Components/Panel',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, PanelModule, BrowserAnimationsModule],
    }),
  ],
  component: AppPanelComponent,
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
        modules: ['PanelModule'],
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
        name: 'title',
        type: 'string',
        value: 'Use to name each accordion panel',
      },
      {
        name: 'titleExpanded',
        type: 'string',
        value: 'If set, the title will change to this valud when the panel is expaneded.',
      },
      {
        name: 'titleClass',
        type: 'string',
        value:
          'Use to override the default class for a panel title bar.  If you use this parameter, most default styles will be removed. If you are overriding the ',
        default:
          'ds-u-fill--primary-darkest ds-u-color--white ds-u-font-size--h4 ds-u-md-font-size--h3 ds-u-padding--2',
      },
      {
        name: 'titlePlacement',
        type: 'PanelTitlePlacementEnum',
        value: 'Override the placement of the Title',
        options: PanelTitlePlacementEnum,
        default: 'PanelTitlePlacementEnum.TOP',
      },

      {
        name: 'extTitle',
        type: 'boolean',
        value:
          'Use to enable supplimental information to each panel. Goes to the right of the main title and inline with it',
      },
      {
        name: 'extTitleClass',
        type: 'string',
        value: 'Use this to add different classes to change the look and feel of each ext title',
      },
      {
        name: 'expand',
        type: 'boolean',
        // tslint:disable-next-line: max-line-length
        value:
          'Use this only to set a main panel to open on load. For example if I want the first panel to be set to open I will add expand=true to panel',
      },
      {
        name: 'expandedClass',
        type: 'string',
        value:
          "Use to override the default class for panel once it's expanded.  If you use this parameter, most default styles will be removed.  The defaults are: 'ds-u-border-top--0 ds-u-border--1 ds-u-padding--2'",
      },
      {
        name: 'openAll',
        type: 'boolean',
        // tslint:disable-next-line: max-line-length
        value:
          'Same concept as expand. Use this input on all panels to make each one open. Its optional: we use it when a search is open on the panels, we set openAll to true on each panel',
      },
      {
        name: 'panelClick',
        type: 'function',
        // tslint:disable-next-line: max-line-length
        value:
          'A javascript function that will be called when the panel is clicked. It takes one argument, which is a click event',
      },
      {
        name: 'icon',
        type: 'IconDefinition',
        value: 'An icon to show in the panel when a panel is closed.',
        default: 'faPlus',
      },
      {
        name: 'iconExpanded',
        type: 'IconDefinition',
        value: 'An icon to show in the panel when a panel is expanded.',
        default: 'faMissing',
      },
      {
        name: 'iconPlacement',
        type: 'PanelIconPlacementEnum',
        value: 'Override the placement of the icon.',
        default: 'PanelIconPlacementEnum.LEFT',
        options: PanelIconPlacementEnum,
      },
      {
        name: 'plusClass',
        type: 'string',
        value:
          'Use this to add a class to the plus component.  This is a good way to change the color of the component',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
    ],
    notes: [
      'Additionally you can use templating to add more content to the panels.  For example if you want to add extra content to be right aligned just wrap that content in a span tag. And if you want content to show when you open the panel just add that content to a div tag.',
      `Example:<pre>
&lt;app-panel
    (panelClick) = "announce($event)"
    title ='Accordion Example'
    extTitleClass = 'customizeExtra'
    dataAutoId = 'dataID'
    [extTitle] = true
    [expand] = false
    [openAll] = false&gt;
    &lt;span&gt;
    Additional Title
    &lt;/span&gt;
    &lt;div&gt;
    Content on panel open
    &lt;/div&gt;
&lt;/app-panel&gt;
                </pre>`,
    ],
  },
});

export const Normal: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
            >
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props: defaultProps,
});

export const CustomIcon: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
            >
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props,
});


export const CustomIconAndExpandedTitle: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
            >
                <span>
                    Additional Title
                </span>
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props,
});

export const CustomIconAndExpandedButton: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
            >
                <span>
                    <button class="ds-c-button ds-c-button--transparent ds-u-padding--0">A Button</button>
                </span>
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props,
});

export const IconPlacementInline: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
                [iconPlacement] = "PanelIconPlacementEnum.INLINE"
            >
                <span>
                    Additional Title
                </span>
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props,
});

export const IconPlacementRight: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title ='Panel Example'
                extTitleClass = 'customizeExtra'
                dataAutoId = 'dataID'
                [extTitle] = true
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
                [iconPlacement] = "PanelIconPlacementEnum.RIGHT"
            >
                <span>
                    Additional Title
                </span>
                <div>
                    Panel Content
                </div>
            </app-panel>
        `,
  props,
});

export const TitlePlacementAndExpandedTitleOverride: Story<AppPanelComponent> = () => ({
  template: `
            <app-panel
                (panelClick) = "handleEvent($event)"
                title = 'View More'
                [titlePlacement] = 'PanelTitlePlacementEnum.BOTTOM'
                titleExpanded ='View Less'
                titleClass = 'ds-u-fill--transparent ds-u-margin--0 ds-u-font-size--base ds-u-color--primary'
                dataAutoId = 'dataID'
                expandedClass = ''
                [expand] = false
                [openAll] = false
                [icon] = "faChevronDown"
                [iconExpanded] = "faChevronUp"
                [iconPlacement] = "PanelIconPlacementEnum.INLINE"
            >
                <div>
                    Panel Content Lorem Ipsum dolor somit
                </div>
            </app-panel>
        `,
  props,
});
