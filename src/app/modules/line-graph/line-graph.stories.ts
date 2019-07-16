import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppLineGraphComponent } from './line-graph.component';
import { ModalModule } from '../modal/modal.module';
import { DropdownModule } from '../drop-down/drop-down.module';
import { PipesModule } from '../../pipes/pipes.module';

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
            declarations: [AppLineGraphComponent],
            imports: [CommonModule, NgxChartsModule, ModalModule, DropdownModule, BrowserAnimationsModule, PipesModule],
        }),
    )
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

