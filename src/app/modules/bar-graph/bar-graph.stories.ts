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
import { BarGraphModel } from './bar-graph.model';

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

const barGraphModel = new BarGraphModel({
    data: barGraphData,
});

const props = {
    ...defaultProps,
    barGraphModel: barGraphModel
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
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
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
                    value: 'Use this to override the component\'s default settings. See options for this data structure below.',
                },
                {
                    name: 'barGraphModel.data',
                    type: 'array',
                    value: 'The data for the bar graph. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.title',
                    type: 'string',
                    value: 'Heading for bar chart. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.id',
                    type: 'number',
                    value: 'Unique id for using multiple charts on a single page. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.colorScheme',
                    type: 'string',
                    value: 'The color scheme of the chart. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.showXAxis',
                    type: 'boolean',
                    value: 'Will show/hide xAxis names and values. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.showYAxis',
                    type: 'boolean',
                    value: 'Will show/hide yAxis names and values. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.showXAxisLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.showYAxisLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.xAxisLabel',
                    type: 'string',
                    value: 'Label for xAxis. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.yAxisLabel',
                    type: 'string',
                    value: 'Label for yAxis. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.animations',
                    type: 'boolean',
                    value: 'Enable/disable animations for graph. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.roundDomains',
                    type: 'boolean',
                    value: 'Enable/disable rounding axis. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.gradient',
                    type: 'boolean',
                    value: 'Enable/disable gradient background. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.compareBars',
                    type: 'boolean',
                    value: 'For comparing two bars. When true, if the first bar value is less than the second bar, the bar will be red. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.tooltipDisabled',
                    type: 'boolean',
                    value: 'Enable/disable tooltips. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.barPadding',
                    type: 'number',
                    value: 'padding between the bars in bar graph. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.showGridLines',
                    type: 'boolean',
                    value: 'Will show/hide graph grid lines. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.roundEdges',
                    type: 'boolean',
                    value: 'Will make the edges of bars round/square. A property of the barGraphModel argument.',
                },
                {
                    name: 'barGraphModel.dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID. A property of the barGraphModel argument.',
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
                </pre>`
            ]
        }
    }))
    .add('Normal', () => ({
        moduleMetadata: {
        },
        template: `
            <app-bar-graph [barGraphModel]='barGraphModel'></app-bar-graph>
        `,
        props
    }));

