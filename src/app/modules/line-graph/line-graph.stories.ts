import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppLineGraphComponent } from './line-graph.component';
import { ModalModule } from '../modal/modal.module';
import { DropdownModule } from '../drop-down/drop-down.module';
import { PipesModule } from '../../pipes/pipes.module';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';
import { LineGraphModel } from './line-graph.model';

const lineGraphData = [
    {
        'name': 'Strata-1',
        'series': [
            {
                'name': 'Q1',
                'value': 4300
            },
            {
                'name': 'Q2',
                'value': 4000
            },
            {
                'name': 'Q3',
                'value': 5940
            }
        ]
    },
    {
        'name': 'Strata-2',
        'series': [
            {
                'name': 'Q1',
                'value': 5300
            },
            {
                'name': 'Q2',
                'value': 3000
            },
            {
                'name': 'Q3',
                'value': 1940
            }
        ]
    },
    {
        'name': 'Strata-3',
        'series': [
            {
                'name': 'Q1',
                'value': 2300
            },
            {
                'name': 'Q2',
                'value': 6000
            },
            {
                'name': 'Q3',
                'value': 3940
            }
        ]
    }
];

const lineGraphDataXAxisValues = ['Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019'];

const lineGraphDataMissingValues = [
    {
        'name': 'Strata-1',
        'series': [
            {
                'name': 'Q1 2018',
                'value': 4300
            },
            {
                'name': 'Q3 2018',
                'value': 5940
            }
        ]
    },
    {
        'name': 'Strata-2',
        'series': [
            {
                'name': 'Q1 2018',
                'value': 5300
            },
            {
                'name': 'Q4 2018',
                'value': 3000
            },
        ]
    },
    {
        'name': 'Strata-3',
        'series': [
            {
                'name': 'Q2 2018',
                'value': 6000
            },
            {
                'name': 'Q3 2018',
                'value': 3940
            },
            {
                'name': 'Q2 2019',
                'value': 4900
            }
        ]
    },
    {
        'name': 'One Dot',
        'series': [
            {
                'name': 'Q1 2019',
                'value': 5800
            },
        ]
    }
];

const lineGraphDataSingleDataPoints = [
    {
        'name': 'Strata-1',
        'series': [
            {
                'name': 'Q1 2018',
                'value': 4300
            },
        ]
    },
    {
        'name': 'Strata-2',
        'series': [
            {
                'name': 'Q4 2018',
                'value': 3000
            },
        ]
    },
    {
        'name': 'Strata-3',
        'series': [
            {
                'name': 'Q2 2019',
                'value': 4900
            }
        ]
    },
    {
        'name': 'One Dot',
        'series': [
            {
                'name': 'Q4 2018',
                'value': 5800
            },
        ]
    }
];

const lineGraphModel = new LineGraphModel({
    data: lineGraphData,
    xLabel: 'X Label',
    yLabel: 'Y Label',
});

const lineGraphModelMissingValues = new LineGraphModel({
    data: lineGraphDataMissingValues,
    xAxisValues: lineGraphDataXAxisValues,
    xLabel: 'X Label',
    yLabel: 'Y Label'
});

const lineGraphModelSingleDataPoints = new LineGraphModel({
    data: lineGraphDataSingleDataPoints,
    xAxisValues: lineGraphDataXAxisValues,
    xLabel: 'X Label',
    yLabel: 'Y Label'
});

const props = {
    ...defaultProps,
    lineGraphModel,
    lineGraphModelMissingValues,
    lineGraphModelSingleDataPoints
};

storiesOf('Components|Line Graph', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppLineGraphComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [CommonModule, NgxChartsModule, ModalModule, DropdownModule, BrowserAnimationsModule, PipesModule, FontAwesomeModule],
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
                    modules: ['LineGraphModule'],
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
                    name: 'lineGraphModel',
                    type: 'LineGraphModel',
                    value: 'Use this to override the component\'s default settings. See options for this data structure below.',
                },
                {
                    name: 'lineGraphModel.data',
                    type: 'array',
                    value: 'The data for the line graph. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.xAxisValues',
                    type: 'array',
                    value: 'If you would like to specify the values that are shown on the X Axis, you can pass those values in through this parameter.  This is very useful if your dataset does not completely and consistently fill the X Axis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.colorScheme',
                    type: 'object',
                    value: 'The color scheme of the graph. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.animations',
                    type: 'boolean',
                    value: 'Enable/disable animations for graph. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.gradient',
                    type: 'boolean',
                    value: 'Enable/disable gradient background. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.gridLines',
                    type: 'boolean',
                    value: 'Will show/hide graph grid lines. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.roundDomains',
                    type: 'boolean',
                    value: 'Enable/disable rounding axis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.xAxis',
                    type: 'boolean',
                    value: 'Will show/hide xAxis names and values. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.yAxis',
                    type: 'boolean',
                    value: 'Will show/hide yAxis names and values. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.showXLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.showYLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.xLabel',
                    type: 'string',
                    value: 'Label for xAxis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.yLabel',
                    type: 'string',
                    value: 'Label for yAxis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.xAxisTickFormatting',
                    type: 'function',
                    value: 'A function to format the values that display on the x axis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.yAxisTickFormatting',
                    type: 'function',
                    value: 'A function to format the values that display on the y axis. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.autoScale',
                    type: 'boolean',
                    value: 'Set the minimum value of the y axis to the minimum value in the data, instead of 0. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.timeline',
                    type: 'boolean',
                    value: 'Display a timeline control under the chart. Only available if a the x scale is linear or time. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.tooltipDisabled',
                    type: 'boolean',
                    value: 'Disable tooltips and line hover state on mouseover. A property of the lineGraphModel argument.',
                },
                {
                    name: 'lineGraphModel.dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID. A property of the lineGraphModel argument.',
                },
                {
                    name: 'LineClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when a line is clicked. It takes one argument, which is a click event.',
                },
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'The line graph component utilizes the <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> library.',
                'Expected \'data\' format:',
                `<pre>
[
    {
        "name": "A",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },
    {
        "name": "B",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    }
]
                </pre>`,
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-line-graph
                [lineGraphModel]= 'lineGraphModel'
                (LineClick) = "HANDLECLICK($event)">
            </app-line-graph>
        `,
        props
    }))
    .add('Skipping X Axis Values', () => ({
        template: `
            <app-line-graph
                [lineGraphModel]= 'lineGraphModelMissingValues'
                (LineClick) = "HANDLECLICK($event)">
            </app-line-graph>
        `,
        props
    }))
    .add('Single Data Points', () => ({
        template: `
            <app-line-graph
            [lineGraphModel]= 'lineGraphModelSingleDataPoints'
            (LineClick) = "HANDLECLICK($event)">
        </app-line-graph>
        `,
        props
    }));

