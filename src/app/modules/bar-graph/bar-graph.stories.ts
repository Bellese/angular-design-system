import { storiesOf } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BarGraphComponent } from './bar-graph.component';
//import barGraphData from '../../../assets/data/bar-data.json';

const barGraphData = [
    {
        "name": "STP-2",
        "value": 100
    },
    {
        "name": "STP-3",
        "value": 6
    }
]

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
    barGraphData: barGraphData
};

storiesOf('Bar Graph', module)
    .add('Normal', () => ({
        moduleMetadata: {
            declarations: [BarGraphComponent],
            imports: [CommonModule, NgxChartsModule, ModalModule, BrowserAnimationsModule],
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

