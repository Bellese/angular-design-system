import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarGraphComponent } from './bar-graph.component';
import { ModalModule } from '../modal/modal.module';

import ParameterComponent from '../../../stories/parameters.component';
import { defaultProps } from '../../../../.storybook/helpers';

const barGraphData = [
    {
        'name': 'STP-2',
        'value': 100
    },
    {
        'name': 'STP-3',
        'value': 6
    },
    {
        'name': 'STP-4',
        'value': 55
    },
];

const props = {
    ...defaultProps,
    barGraphData: barGraphData
};

storiesOf('Components|Bar Graph', module)
    .addDecorator(
        moduleMetadata({
            declarations: [BarGraphComponent, ParameterComponent],
            imports: [NgxChartsModule, ModalModule, BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            <h1>Import</h1>
            <pre>
                import &#123; BarGraphModule &#125; from '@bellese/angular-design-system';
                import &#123; ModalModule &#125; from '@bellese/angular-design-system';
                import &#123; NgxChartsModule &#125; from '@swimlane/ngx-charts';
                import &#123; BrowserAnimationsModule &#125; from '@angular/platform-browser/animations';
            </pre>
            <h1>NgModule</h1>
            <p>Add <code>BarGraphModule</code>, <code>ModalModule</code>, <code>NgxChartsModule</code>, <code>BrowserAnimationsModule</code> to the <code>imports</code> section of your NgModule definition
            <h1>Parameters</h1>
            <app-storybook-parameter-component [parameters]="parameters"></app-storybook-parameter-component>
        `,
        props: {
            parameters: [
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
                    type: '????',
                    value: 'The color scheme of the chart.',
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
                    value: 'For comparing two bars. When true, if the first bar value is less than the second bar, the bar will be red',
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
            ]
        }
    }))
    .add('Normal', () => ({
        moduleMetadata: {
        },
        template: `
            <app-bar-graph
                [data]="barGraphData"
                title='Bar Graph Example'
                id=1
                colorScheme = 'aqua'
                [showXAxis] = true
                [showYAxis] = true
                [showXAxisLabel] = true
                [showYAxisLabel] = true
                xAxisLabel = 'x label'
                yAxisLabel = 'y label'
                [animations] = true
                [roundDomains] = false
                [gradient] = false
                [compareBars] = false
                [tooltipDisabled] = true
                [barPadding] = 20
                [showGridLines] = true
                [roundEdges] = true
                dataAutoId = 'testingID'>
            </app-bar-graph>
        `,
        props
    }));

