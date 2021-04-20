import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { AppPaginationComponent } from './paging.component';
import { PagingModule } from './paging.module';

const props = {
  ...defaultProps,
  list: [1, 2, 3, 4, 5, 6, 7, 8],
};

export default {
  title: 'Components/Paging',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, PagingModule],
    }),
  ],
  component: AppPaginationComponent,
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
        modules: ['PagingModule'],
        file: '@bellese/angular-design-system',
        ngmodule: 'imports',
      },
      {
        modules: ['NgxPaginationModule'],
        file: 'ngx-pagination',
        ngmodule: 'imports',
      },
    ],
    parameters: [
      {
        name: 'currentPage',
        type: 'function',
        value: 'Bind this to the currentPage value in the paginate pipe. ex: p = $event',
      },
      {
        name: 'id',
        type: 'string',
        value: 'Use this to add unique ID to the pager',
      },
      {
        name: 'dataAutoId',
        type: 'string',
        value: 'Use this for testing ID',
      },
      {
        name: 'screenReaderLabel',
        type: 'string',
        value: 'label for screen reader',
      },
    ],
    notes: [
      'The pagination component utilizes the <a href="http://michaelbromley.github.io/ngx-pagination/#/" target="_blank">ngx-pagination</a> library. In order to paginate a list, a <code>paginate</code> pipe must be added to your list items. You can also configure <code>itemsPerPage</code> to display the amount of list items you\'d like per page.',
      `<pre>
&lt;ul&gt;
    &lt;li *ngFor="let item of list | paginate: { itemsPerPage: 3, currentPage: p}"&gt;
        {{item}}
    &lt;/li&gt;
&lt;/ul&gt;
&lt;app-paging (currentPage)="p = $event"&gt;&lt;/app-paging&gt;'
                </pre>`,
    ],
  },
});

export const Normal: Story<AppPaginationComponent> = () => ({
  template: `
            <ul>
                <li *ngFor="let item of list | paginate: { itemsPerPage: 3, currentPage: p}">
                    {{item}}
                </li>
            </ul>
            <app-paging (currentPage)="p = $event"></app-paging>
        `,
  props,
});
