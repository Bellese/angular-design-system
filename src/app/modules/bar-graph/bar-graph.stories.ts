import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { BarGraphComponent } from './bar-graph.component';
import {
  BarGraphDataModel,
  BarGraphDataSetModel,
  BarGraphGroupDataModel,
  BarGraphLegendLocationEnum,
  BarGraphModel,
} from './bar-graph.model';
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
  },
];

const barGraphGroupModel = new BarGraphModel({
  data: barGraphGroupData,
  legend: true,
});

const barGraphMaxBarModel = new BarGraphModel({
  ...barGraphGroupModel,
  title: 'A really cool bar graph',
  maxBarGroups: 2,
  legend: true,
});

const barGraphDataSets: BarGraphDataSetModel[] = [
  {
    name: 'Quarters',
    data: [
      {
        name: 'Q1 2019',
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
        name: 'Q2 2019',
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
        name: 'Q3 2019',
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
        name: 'Q4 2019',
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
      },
      {
        name: 'Q1 2020',
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
        name: 'Q2 2020',
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
        name: 'Q3 2020',
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
        name: 'Q4 2020',
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
      },
    ],
  },
  {
    name: 'Years',
    data: [
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
      },
    ],
  },
];

const barGraphDataSetsModel = new BarGraphModel({
  dataSets: barGraphDataSets,
  title: 'A really cool bar graph',
  maxBarGroups: 4,
  legend: true,
});

const props = {
  ...defaultProps,
  barGraphModel,
  barGraphGroupModel,
  barGraphMaxBarModel,
  barGraphDataSetsModel,
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
            type: 'BarGraphDataModel[] | BarGraphGroupDataModel[]',
            value:
              'The data for the bar graph.  This can be either single bars or grouped bars. Object definitions for the two types are included below.',
            properties: [
              {
                name: 'BarGraphDataModel',
                type: 'BarGraphDataModel',
                value:
                  'This is the type that can be passed into the data property if you want to display a single bar graph',
                properties: [
                  {
                    name: 'name',
                    type: 'string',
                    value: 'The name of the bar that gets displayed on the X Axis',
                  },
                  {
                    name: 'value',
                    type: 'number',
                    value: 'The value to display in the bar grah',
                  },
                  {
                    name: 'modal',
                    type: 'any',
                    value: '(Optional) Data to display in a modal',
                  },
                  {
                    name: 'modalTitle',
                    type: 'string',
                    value: '(Optional) The title for the modal',
                  },
                ],
              },
              {
                name: 'BarGraphGroupDataModel',
                type: 'BarGraphGroupDataModel',
                value:
                  'This is the type that can be passed into the data property if you want to display a grouped bar graph',
                properties: [
                  {
                    name: 'name',
                    type: 'string',
                    value: 'The name of the group that displays in the bar graph and legend',
                  },
                  {
                    name: 'series',
                    type: 'array',
                    value: 'Values associated with the group to display in the bar graph',
                    properties: [
                      {
                        name: 'name',
                        type: 'string',
                        value: 'The name of the bar that gets displayed on the X Axis',
                      },
                      {
                        name: 'value',
                        type: 'number',
                        value: 'The value to display in the bar grah',
                      },
                      {
                        mame: 'extra',
                        type: 'any',
                        value: '(Optional) Extra information to pass into the bar graph',
                      },
                    ],
                  },
                ],
              },
            ],
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
            value: 'Padding between the bars in bar graph',
            default: 2,
          },
          {
            name: 'groupPadding',
            type: 'number',
            value: 'Padding between grouped bars, only applicable if groups are displayed',
            default: 10,
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
          {
            name: 'legend',
            type: 'boolean',
            value: 'Enable or disable a legend for the graph',
            default: 'false',
          },
          {
            name: 'legendTitle',
            type: 'string',
            value: 'Set the title for the legend if it is displayed',
            default: `''`,
          },
          {
            name: 'legendLocation',
            type: 'BarGraphLegendLocationEnum',
            options: BarGraphLegendLocationEnum,
            default: 'BarGraphLegendLocationEnum.RIGHT',
            value: 'Where to display the legend when the graph is being displayed on non-mobile screen sizes.',
          },
          {
            name: 'legendLocationSmall',
            type: 'BarGraphLegendLocationEnum',
            options: BarGraphLegendLocationEnum,
            default: 'BarGraphLegendLocationEnum.BELOW',
            value: 'Where to display the legend when the graph is being displayed on mobile screen sizes.',
          },
        ],
      },
    ],
    notes: [
      // tslint:disable-next-line: max-line-length
      'The bar graph component utilizes the <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> library.',
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

export const MaxBarGroups: Story<BarGraphComponent> = () => ({
  template: `
    <app-bar-graph [barGraphModel]='barGraphMaxBarModel'></app-bar-graph>
`,
  props,
});

export const DataSets: Story<BarGraphComponent> = () => ({
  template: `
    <app-bar-graph [barGraphModel]='barGraphDataSetsModel'></app-bar-graph>
`,
  props,
});
