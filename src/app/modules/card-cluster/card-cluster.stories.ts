import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppCardClusterComponent } from './card-cluster.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';
import { CardClusterModel } from './card-cluster.models';
import { AppChoiceComponent } from '../choice/choice.component';

const cardClusterDataNormal = new CardClusterModel({
    'mainCard': true,
    'mainTitle': 'STK-2',
    'mainSub': 'Episodes',
    'ariaLabel': 'Activate enter button to view all items',
    'buttonClicked': 'CardCluster0',
    'cluster': [
        {
            'value': 'vte',
            'name': 'IPP Not Met',
            'ariaLabel': 'Activate enter to view all items for the IPP Not Met category'
        },
        {
            'value': 'cbc',
            'name': 'IPP Met'
        },
        {
            'value': 1,
            'name': 'Denominator'
        },
        {
            'value': 16,
            'name': 'Denominator'
        },
        {
            'value': 85,
            'name': 'Numerator'
        },
        {
            'value': 3,
            'name': 'Den. Exceptions'
        },
        {
            'classValue': 'viewPerformanceIcon',
            'classButton': 'vpi',
            'name': 'View Performance',
            'className': 'vpi'
        }
    ]
});

const cardClusterDataWithoutMain = {
    ...cardClusterDataNormal,
    mainCard: false,
    buttonClicked: 'CardCluster1',
};

const cardClusterDataWithoutMiniCards = {
    ...cardClusterDataNormal,
    cluster: []
 };

 const cardClusterDataSelectedCard = {
     ...cardClusterDataNormal,
    buttonClicked: 'CardCluster4'
 };

 const cardClusterDataSetTotal = {
     ...cardClusterDataNormal,
     total: 9999
 };


 const cardClusterShowRadioButtons = {
    ...cardClusterDataNormal,
    showRadioButton: true
};

 const props = {
     ...defaultProps,
     cardClusterDataNormal,
     cardClusterDataWithoutMain,
     cardClusterDataWithoutMiniCards,
     cardClusterDataSelectedCard,
     cardClusterDataSetTotal,
     cardClusterShowRadioButtons
 };

storiesOf('Components|Card Cluster', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCardClusterComponent, AppChoiceComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    modules: ['CardClusterModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'cardArray',
                    type: 'object',
                    value: 'A javascript object that contains all information needed to display the card cluster.',
                    properties: [
                        {
                            name: 'mainCard',
                            type: 'boolean',
                            value: 'Hide or show the main card on the left side of the cluster',
                        },
                        {
                            name: 'mainTitle',
                            type: 'string',
                            optional: true,
                            value: 'The title to show in the main card'
                        },
                        {
                            name: 'mainSub',
                            type: 'string',
                            optional: true,
                            value: 'The subtitle to show in the main card'
                        },
                        {
                            name: 'total',
                            type: 'number | string',
                            optional: true,
                            // tslint:disable-next-line: max-line-length
                            value: 'The total to show in the main card.  Leave blank to calculate based on the sum of all values in the cluster.'
                        },
                        {
                            name: 'ariaLabel',
                            type: 'string',
                            optional: true,
                            value: 'Use this to further specify main card to the screen reader.  Leave blank to use mainTitle value.',
                        },
                        {
                            name: 'rowMaxItems',
                            type: 'number',
                            optional: true,
                            // tslint:disable-next-line: max-line-length
                            value: 'The maximum amount of cards to show in a cluster row.  Leave blank to set to the minimum value of either 4 or half of the total cards in the cluster.'
                        },
                        {
                            name: 'showRadioButton',
                            type: 'boolean',
                            value: 'Hide or show radio buttons inside of the cards'
                        },
                        {
                            name: 'buttonClicked',
                            type: 'string',
                            optional: true,
                            value: 'Specify which button should be selected by default.'
                        },
                        {
                            name: 'dataAutoId',
                            type: 'string',
                            value: 'Use this for testing ID',
                        },
                        {
                            name: 'cluster',
                            type: 'CardClusterClusterModel[]',
                            value: 'An array of values used to define the cards inside the cluster.',
                            properties: [
                                {
                                    name: 'name',
                                    type: 'string',
                                    value: 'The name to show in the card inside the cluster'
                                },
                                {
                                    name: 'value',
                                    type: 'number | string',
                                    value: 'The value to show in the card inside the cluster'
                                },
                                {
                                    name: 'ariaLabel',
                                    optional: true,
                                    type: 'string',
                                    // tslint:disable-next-line: max-line-length
                                    value: 'Use this to further specify main card to the screen reader.  Leave blank to use the card\'s name.',
                                },
                                {
                                    name: 'classButton',
                                    optional: true,
                                    type: 'string',
                                    value: 'A class to apply to the element that contains the card'
                                },
                                {
                                    name: 'classValue',
                                    optional: true,
                                    type: 'string',
                                    value: 'A class to apply to the element that contains the card\'s value'
                                },
                                {
                                    name: 'className',
                                    optional: true,
                                    type: 'string',
                                    value: 'A class to apply to the element that contains the card\'s name'
                                },
                            ]
                        },
                    ]
                }
            ],
            notes: []
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataNormal"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }))
    .add('Without Main Card', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMain"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }))
    .add('No Mini Cards', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMiniCards"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    })).add('Selected Card', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataSelectedCard"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    })).add('Set Total', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataSetTotal"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    })).add('Show Radio Buttons', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterShowRadioButtons"
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }));
