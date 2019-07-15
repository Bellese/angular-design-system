import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarGraphComponent } from './bar-graph.component';
import { ModalModule } from '../modal/modal.module';

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

storiesOf('Bar Graph', module)
    .addDecorator(
        moduleMetadata({
            declarations: [BarGraphComponent],
            imports: [CommonModule, NgxChartsModule, ModalModule, BrowserAnimationsModule],
        }),
    )
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

