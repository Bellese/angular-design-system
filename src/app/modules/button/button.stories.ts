import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, ButtonModule],
    }),
  ],
  component: AppButtonComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
  props: {
    imports: [
      {
        modules: ['ButtonModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'ariaLabel',
        type: 'string',
        value: 'Use this to further specify button to the screen reader',
      },
      {
        name: 'buttonType',
        type: 'string',
        // tslint:disable-next-line: max-line-length
        value:
          'Use this to add classes to button. Pull classes from <a href="https://design.cms.gov" target="_blank">CMS Design System</a>',
      },
      {
        name: 'buttonID',
        type: 'string',
        value: 'Use this to add unique ID to button',
      },
      {
        name: 'ariaSort',
        type: 'string',
        value: "Use this to further specify button's sort order (ascending, descending) to the screen reader",
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
      {
        name: 'tabLevel',
        type: 'string',
        value: 'Use this to set a tabindex for the button component',
      },
      {
        name: 'disabled',
        type: 'boolean',
        value: 'Use this to disable the button',
      },
      {
        name: 'callBack',
        type: 'function',
        // tslint:disable-next-line: max-line-length
        value:
          'A javascript function that will be called when the button is clicked. It takes one argument, which is a click event.',
      },
    ],
  },
});

export const Normal: Story<AppButtonComponent> = () => ({
  template: `
    <app-button
        ariaLabel = 'Button Example'
        buttonType = 'ds-c-button'
        buttonID = 'Button1'
        [ariaSort] = true
        dataAutoId = 'testingID'
        tabLevel= '2'
        (callBack) = 'handleEvent($event)'>
            Example Button
    </app-button>`,
});

export const Primary: Story<AppButtonComponent> = () => ({
  template: `
    <app-button
        ariaLabel = 'Button Example'
        buttonType = 'ds-c-button ds-c-button--primary'
        buttonID = 'Button1'
        [ariaSort] = true
        dataAutoId = 'testingID'
        (callBack) = 'handleEvent($event)'>
            Example Button
    </app-button>`,
});

export const Transparent: Story<AppButtonComponent> = () => ({
  template: `
    <app-button
        ariaLabel = 'Button Example'
        buttonType = 'ds-c-button ds-c-button--transparent'
        buttonID = 'Button1'
        [ariaSort] = true
        dataAutoId = 'testingID'
        (callBack) = 'handleEvent($event)'>
            Example Button
    </app-button>`,
});
Transparent.storyName = 'Transparent (link)';

export const Disabled: Story<AppButtonComponent> = () => ({
  template: `
        <app-button
            ariaLabel = 'Button Example'
            buttonType = 'ds-c-button'
            buttonID = 'Button1'
            [ariaSort] = true
            dataAutoId = 'testingID'
            [disabled] = true
            (callBack) = 'handleEvent($event)'>
                Example Button
        </app-button>`,
});
