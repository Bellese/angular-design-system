import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppTabsComponent } from './tabs.component';
import { TabsModule } from './tabs.module';

const tabs = [
  {
    title: 'tab1',
    ariaLabel: 'tab1 hello',
    link: 'tab1',
  },
  {
    title: 'tab2',
    ariaLabel: 'tab1 yellow',
    link: 'tab2',
  },
  {
    title: 'tab3',
    ariaLabel: 'tab3 mellow',
    link: 'tab3',
  },
];

const props = {
  ...defaultProps,
  tabs,
};

const buttons = [
  {
    title: 'tab1',
    ariaLabel: 'tab1 hello',
  },
  {
    title: 'tab2',
    ariaLabel: 'tab1 yellow',
  },
  {
    title: 'tab3',
    ariaLabel: 'tab3 mellow',
  },
];

const useButtons = true;
const buttonsProps = {
  ...defaultProps,
  tabs: buttons,
  useButtons: true,
};

export default {
  title: 'Components/Tabs',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, TabsModule],
    }),
  ],
  component: AppTabsComponent,
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
        modules: ['TabsModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'tabs',
        type: 'array',
        value: 'An array of objects that represents tabs',
      },
      {
        name: 'defaultSelectedId',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'The ID of the tab that should be selected by default.  If nothing is passed on, the first tab is selected by default.',
      },
      {
        name: 'tablistClassName',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'Use this to add classes to tab container. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
      },
      {
        name: 'onChange',
        type: 'array',
        // tslint:disable-next-line: max-line-length
        value:
          'A javascript function that will be called when a tab is clicked. It takes one argument, which is a click event.',
      },
      {
        name: 'tabsAsButtons',
        type: 'boolean',
        value: 'Uses <button> instead of <a> for tab element for better ARIA support.',
      },
    ],
    notes: [
      "Expected format for 'tabs'",
      `<pre>
[
    {
        id: 'tab1',
        title: 'tab1',
        ariaLabel: 'tab1 hello',
        link: 'tab1',
    },
    {
        id: 'tab2',
        title: 'tab2',
        ariaLabel: 'tab1 yellow',
        link: 'tab2',
    },
    {
        id: 'tab3',
        title: 'tab3',
        ariaLabel: 'tab3 mellow',
        link: 'tab3',
    }
];
                </pre>`,
    ],
  },
});

export const Normal: Story<AppTabsComponent> = () => ({
  template: `
            <app-tabs
                [tabs]="tabs"
                defaultSelectedId="tab2"
                (onChange)="handleEvent($event)">
            </app-tabs>
        `,
  props,
});

export const UsesButtonElement: Story<AppTabsComponent> = () => ({
  template: `
            <app-tabs
                [tabsAsButtons]="useButtons"
                [tabs]="tabs"
                defaultSelectedId="tab2"
                (onChange)="handleEvent($event)">
            </app-tabs>
        `,
  props: buttonsProps,
});
