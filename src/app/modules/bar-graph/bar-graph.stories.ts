import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { BarGraphComponent } from './bar-graph.component';
import { BarGraphDataModel, BarGraphGroupDataModel, BarGraphModel } from './bar-graph.model';
import { BarGraphModule } from './bar-graph.module';

const barGraphData: BarGraphDataModel[] = [
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

const barGraphGroupData: BarGraphGroupDataModel[] = [
  {
    name: 'CY 2017',
    series: [
      {
        name: 'Facility',
        value: 35,
      },
      {
        name: 'State',
        value: 55,
      },
      {
        name: 'National',
        value: 65,
      },
    ],
  },
  {
    name: 'CY 2018',
    series: [
      {
        name: 'Facility',
        value: 19,
      },
      {
        name: 'State',
        value: 32,
      },
      {
        name: 'National',
        value: 38,
      },
    ],
  },
  {
    name: 'CY 2019',
    series: [
      {
        name: 'Facility',
        value: 37,
      },
      {
        name: 'State',
        value: 62,
      },
      {
        name: 'National',
        value: 75,
      },
    ],
  },
  {
    name: 'CY 2020',
    series: [
      {
        name: 'Facility',
        value: 28,
      },
      {
        name: 'State',
        value: 46,
      },
      {
        name: 'National',
        value: 54,
      },
    ],
  }, // [
  //   {
  //     name: 'Germany',
  //     series: [
  //       {
  //         name: '2010',
  //         value: 40632,
  //         extra: {
  //           code: 'de',
  //         },
  //       },
  //       {
  //         name: '2000',
  //         value: 36953,
  //         extra: {
  //           code: 'de',
  //         },
  //       },
  //       {
  //         name: '1990',
  //         value: 31476,
  //         extra: {
  //           code: 'de',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'United States',
  //     series: [
  //       {
  //         name: '2010',
  //         value: 0,
  //         extra: {
  //           code: 'us',
  //         },
  //       },
  //       {
  //         name: '2000',
  //         value: 45986,
  //         extra: {
  //           code: 'us',
  //         },
  //       },
  //       {
  //         name: '1990',
  //         value: 37060,
  //         extra: {
  //           code: 'us',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'France',
  //     series: [
  //       {
  //         name: '2010',
  //         value: 36745,
  //         extra: {
  //           code: 'fr',
  //         },
  //       },
  //       {
  //         name: '2000',
  //         value: 34774,
  //         extra: {
  //           code: 'fr',
  //         },
  //       },
  //       {
  //         name: '1990',
  //         value: 29476,
  //         extra: {
  //           code: 'fr',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'United Kingdom',
  //     series: [
  //       {
  //         name: '2010',
  //         value: 36240,
  //         extra: {
  //           code: 'uk',
  //         },
  //       },
  //       {
  //         name: '2000',
  //         value: 32543,
  //         extra: {
  //           code: 'uk',
  //         },
  //       },
  //       {
  //         name: '1990',
  //         value: 26424,
  //         extra: {
  //           code: 'uk',
  //         },
  //       },
  //     ],
  // },
];

const barGraphGroupModel = new BarGraphModel({
  data: barGraphGroupData,
  legend: true,
});

const props = {
  ...defaultProps,
  barGraphModel,
  barGraphGroupModel,
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

export const Grouped: Story<BarGraphComponent> = () => ({
  template: `
    <app-bar-graph [barGraphModel]='barGraphGroupModel'></app-bar-graph>
`,
  props,
});
