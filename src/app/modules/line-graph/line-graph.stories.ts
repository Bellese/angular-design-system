import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppLineGraphComponent } from './line-graph.component';
import { ModalModule } from '../modal/modal.module';
import { DropdownModule } from '../drop-down/drop-down.module';
import { PipesModule } from '../../pipes/pipes.module';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

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

const props = {
    ...defaultProps,
    lineGraphData
}

storiesOf('Components|Line Graph', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppLineGraphComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [CommonModule, NgxChartsModule, ModalModule, DropdownModule, BrowserAnimationsModule, PipesModule],
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
            // @Input() toolTip: boolean;
            // @Input() dataAutoId: string;
            // @Output() LineClick = new EventEmitter<object>();

            parameters: [
                {
                    name: 'data',
                    type: 'array',
                    value: 'The data for the line graph',
                },
                {
                    name: 'colorScheme',
                    type: 'object',
                    value: 'The color scheme of the graph.',
                },
                {
                    name: 'animations',
                    type: 'boolean',
                    value: 'Enable/disable animations for graph',
                },
                {
                    name: 'gradient',
                    type: 'boolean',
                    value: 'Enable/disable gradient background',
                },
                {
                    name: 'gridLines',
                    type: 'boolean',
                    value: 'Will show/hide graph grid lines',
                },
                {
                    name: 'roundDomains',
                    type: 'boolean',
                    value: 'Enable/disable rounding axis',
                },
                {
                    name: 'xAxis',
                    type: 'boolean',
                    value: 'Will show/hide xAxis names and values',
                },
                {
                    name: 'yAxis',
                    type: 'boolean',
                    value: 'Will show/hide yAxis names and values',
                },
                {
                    name: 'showXLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label',
                },
                {
                    name: 'showYLabel',
                    type: 'boolean',
                    value: 'Will show/hide xAxix label',
                },
                {
                    name: 'xLabel',
                    type: 'string',
                    value: 'Label for xAxis',
                },
                {
                    name: 'yLabel',
                    type: 'string',
                    value: 'Label for yAxis',
                },
                {
                    name: 'xAxisTickFormatting',
                    type: 'function',
                    value: 'A function to format the values that display on the x axis',
                },
                {
                    name: 'yAxisTickFormatting',
                    type: 'function',
                    value: 'A function to format the values that display on the y axis',
                },
                {
                    name: 'autoScale',
                    type: 'boolean',
                    value: 'Set the minimum value of the y axis to the minimum value in the data, instead of 0',
                },
                {
                    name: 'timeline',
                    type: 'boolean',
                    value: 'Display a timeline control under the chart. Only available if a the x scale is linear or time',
                },
                {
                    name: 'tooltip',
                    type: 'boolean',
                    value: 'Add a tooltip on mouseover',
                },
                {
                    name: 'LineClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when a line is clicked. It takes one argument, which is a click event.',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
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
                </pre>`
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-line-graph
                [data]= 'lineGraphData'
                [animations] = true
                [gradient] = true
                [gridLines] = true
                [roundDomain] = true
                [xAxis] = true
                [yAxis] = true
                [showXLabel] = true
                [showYLabel] = true
                xLabel = 'X Label'
                yLabel = 'Y Label'
                [autoScale] = true
                [timeLine] = true
                [toolTip] = true
                dataAutoId = 'testingID'
                (LineClick) = "HANDLECLICK($event)">
            </app-line-graph>
        `,
        props
    }));

