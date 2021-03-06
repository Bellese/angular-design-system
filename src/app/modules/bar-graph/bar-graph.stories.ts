import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { BarGraphComponent } from './bar-graph.component';
import { BarGraphModel } from './bar-graph.model';
import { BarGraphModule } from './bar-graph.module';

const barGraphData = [
  {
    name: 'STP-2',
    value: 100,
  },
  {
    name: 'STP-3',
    value: -6,
  },
  {
    name: 'STP-4',
    value: 55,
  },
];

const barGraphModel = new BarGraphModel({
  data: barGraphData,
});

const props = {
  ...defaultProps,
  barGraphModel: barGraphModel,
};

export default {
  title: 'Components/Bar Graph',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, BarGraphModule, BrowserAnimationsModule],
    }),
  ],
  component: BarGraphComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
  props: {
    imports: [
      {
        modules: ['BarGraphModule'],
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
        name: 'barGraphModel',
        type: 'BarGraphModel',
        value: "Use this to override the component's default settings",
        properties: [
          {
            name: 'data',
            type: 'array',
            value: 'The data for the bar graph',
          },
          {
            name: 'title',
            type: 'string',
            value: 'Heading for bar chart',
          },
          {
            name: 'id',
            type: 'number',
            value: 'Unique id for using multiple charts on a single page',
          },
          {
            name: 'colorScheme',
            type: 'string',
            value: 'The color scheme of the chart',
          },
          {
            name: 'showXAxis',
            type: 'boolean',
            value: 'Will show/hide xAxis names and values',
          },
          {
            name: 'showYAxis',
            type: 'boolean',
            value: 'Will show/hide yAxis names and values',
          },
          {
            name: 'showXAxisLabel',
            type: 'boolean',
            value: 'Will show/hide xAxix label',
          },
          {
            name: 'showYAxisLabel',
            type: 'boolean',
            value: 'Will show/hide xAxix label',
          },
          {
            name: 'xAxisLabel',
            type: 'string',
            value: 'Label for xAxis',
          },
          {
            name: 'yAxisLabel',
            type: 'string',
            value: 'Label for yAxis',
          },
          {
            name: 'animations',
            type: 'boolean',
            value: 'Enable/disable animations for graph',
          },
          {
            name: 'roundDomains',
            type: 'boolean',
            value: 'Enable/disable rounding axis',
          },
          {
            name: 'gradient',
            type: 'boolean',
            value: 'Enable/disable gradient background',
          },
          {
            name: 'compareBars',
            type: 'boolean',
            value:
              'For comparing two bars. When true, if the first bar value is less than the second bar, the bar will be red',
          },
          {
            name: 'tooltipDisabled',
            type: 'boolean',
            value: 'Enable/disable tooltips',
          },
          {
            name: 'barPadding',
            type: 'number',
            value: 'padding between the bars in bar graph',
          },
          {
            name: 'showGridLines',
            type: 'boolean',
            value: 'Will show/hide graph grid lines',
          },
          {
            name: 'roundEdges',
            type: 'boolean',
            value: 'Will make the edges of bars round/square',
          },
          {
            name: 'dataAutoId',
            type: 'string',
            value: 'Use this for testing ID',
          },
        ],
      },
    ],
    notes: [
      // tslint:disable-next-line: max-line-length
      'The bar graph component utilizes the <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> library.',
      `Expected format for 'data' :
                  <pre>
  [
      {
          "name": "Facility",
          "value": 2
      },
      {
          "name": "National",
          "value": 4
      }
  ]
                  </pre>`,
      `Expected format for 'colorScheme' :
                  <pre>
  colorScheme = {
      domain: ["#256D34", "#D6D7D9"]
  }
                  </pre>`,
    ],
  },
});

export const Normal: Story<BarGraphComponent> = () => ({
  template: `
    <app-bar-graph [barGraphModel]='barGraphModel'></app-bar-graph>
`,
  props,
});
