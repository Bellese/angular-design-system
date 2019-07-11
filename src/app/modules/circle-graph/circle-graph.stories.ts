import { storiesOf } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from '../../pipes/pipes.module';

import { AppCircleGraphComponent } from './circle-graph.component';

const moduleMetadata = {
    declarations: [AppCircleGraphComponent],
    imports: [NgxChartsModule, BrowserAnimationsModule, PipesModule],
};

function announce(e) {
    console.log(e);
}

const pieData = [
    {
        "name": "Accepted Files",
        "value": 1000,
        "attr": "rate"
    },
    {
        "name": "Rejected Files",
        "value": 233
    }
];

const props = {
    announce: announce,
    pieData: pieData,
};

storiesOf('Circle Graph', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <app-circle-graph
                dataAutoId = 'testingID'
                [data]='pieData'
                [animations]=true
                [trimLabels]=true
                [labels]=false
                [doughnut]=true
                arcWidth='.25'
                [tooltipDisabled]=true
                title='Error Free'
                [hideGraph] = false
                tableSummary='An example of a pie chart with a legend'
                firstColumnName='Total Files'
                buttonClicked='pieGraphCard1'
                (passButton)='announce($event)'>
            </app-circle-graph>
        `,
        props
    }));
