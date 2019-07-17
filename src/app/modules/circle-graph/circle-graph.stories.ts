import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppCircleGraphComponent } from './circle-graph.component';
import { PipesModule } from '../../pipes/pipes.module';

import { defaultProps } from '../../../../.storybook/helpers';

const pieData = [
    {
        'name': 'Accepted Files',
        'value': 1000,
        'attr': 'rate'
    },
    {
        'name': 'Rejected Files',
        'value': 233
    }
];

const props = {
    ...defaultProps,
    pieData: pieData,
};

storiesOf('Components|Circle Graph', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCircleGraphComponent],
            imports: [NgxChartsModule, BrowserAnimationsModule, PipesModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            The circle graph component takes the following parameters:
        `,
    }))
    .add('Normal', () => ({
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
                (passButton)='handleEvent($event)'>
            </app-circle-graph>
        `,
        props
    }));
