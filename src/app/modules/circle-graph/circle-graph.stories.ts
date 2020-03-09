// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { CircleGraphModule } from './circle-graph.module';

// Misc.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
            imports: [
                StoriesModule,
                CircleGraphModule,
                BrowserAnimationsModule,
            ],
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
                    modules: ['CircleGraphModule'],
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
                    name: 'data',
                    type: 'object',
                    // TODO: details on object
                    value: 'A javascript object that contains information needed to display the card cluster.',
                },
                {
                    name: 'scheme',
                    type: 'object',
                    // TODO: details on object
                    value: 'A javascript object that contains supplemental information needed to display the card cluster.',
                },
                {
                    name: 'customColors',
                    type: 'object',
                    value: 'A javascript object that is used to override colors on the graph.',
                },
                {
                    name: 'animations',
                    type: 'boolean',
                    value: 'Enable or disable graph animations.',
                },
                {
                    name: 'trimLabels',
                    type: 'boolean',
                    value: 'If set to true, the labels will truncate with ellipses if they’re too long to display.',
                },
                {
                    name: 'labels',
                    type: 'boolean',
                    value: 'If set to true, the labels will show along the graph',
                },
                {
                    name: 'doughnut',
                    type: 'boolean',
                    value: 'If set to true, the graph will have a hole in the center',
                },
                {
                    name: 'maxLabelLength',
                    type: 'number',
                    value: 'The maximum amount of characters that a label will display',
                },
                {
                    name: 'explodeSlices',
                    type: 'boolean',
                    value: 'make the radius of each slice proportional to it\'s value',
                },
                {
                    name: 'arcWidth',
                    type: 'number',
                    value: 'This is the thickness of the doughnut where 1 is full width and .1 is a tiny width',
                },
                {
                    name: 'gradient',
                    type: 'boolean',
                    value: 'fill elements with a gradient instead of a solid color',
                },
                {
                    name: 'tooltipDisabled',
                    type: 'boolean',
                    value: 'Removes the ability to mouseover the graph and show labels',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'Text to go under the circle graph',
                },
                {
                    name: 'hideGraph',
                    type: 'boolean',
                    value: 'If set to true, the circle graph does not display.  Only the card cluster displays.',
                },
                {
                    name: 'firstColumnName',
                    type: 'string',
                    value: 'This value displays in the main card.',
                },
                {
                    name: 'passButton',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the button is clicked. It takes one argument, which is a click event.',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'The circle graph component utilizes the <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> library.',
                // tslint:disable-next-line: max-line-length
                'Since we currently see this graph only being used for the error summary page we built it specific to this use case. As such, some of the layout is presented to satisfy this requirement,but you should still be able to build a normal circle graph with no extra frills beyond what is given. The layout stays as is.',
                // tslint:disable-next-line: max-line-length
                'Since it is built for error summary we needed to capture the center text of the circle graph. In order to do this we are taking the total getting the percent of accepted out of this. The capture the accepted you must pass an extra key of “attr” in the object, this key must equal “rate” from here the application will grab the value of the object with attr = rate and divide it over the total. We went this route in case you want to get a different rate instead of accepted, now you can choose by giving the attr of rate.',
                'Expected \'data\' format:',
                `<pre>
chartData = [
  {
    "name": "Facility",
    "value": 458,
    "attr": "rate" // Should have for this component and what its used for
  },
  {
    "name": "National",
    "value": 101
  }
]
                </pre>`
            ]
        }
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
