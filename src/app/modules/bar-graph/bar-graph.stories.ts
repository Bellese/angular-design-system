import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarGraphComponent } from './bar-graph.component';
import { ModalModule } from '../modal/modal.module';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
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
            declarations: [BarGraphComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [NgxChartsModule, ModalModule, BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-compoennt-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-compoennt-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['BarGraphModule', 'ModalModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
                {
                    modules: ['NgxChartsModule'],
                    file: '@swimlane/ngx-charts',
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
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'The bar graph component utilizes the <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> library.',
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

