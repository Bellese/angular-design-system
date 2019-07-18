import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppCardClusterComponent } from './card-cluster.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

const cardClusterDataNormal = {
    'mainCard': true,
    'mainTitle': 'STK-2',
    'mainSub': 'Episodes',
    'cluster': [
        {
            'value': 'vte',
            'name': 'IPP Not Met'
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
};

const cardClusterDataWithoutMain = {
    ...cardClusterDataNormal,
    mainCard: false
};

const cardClusterDataWithoutMiniCards = {
    ...cardClusterDataNormal,
    cluster: []
 };

 const cardClusterDataSetTotal = {
     ...cardClusterDataNormal,
     total: 9999
 };

 const props = {
     ...defaultProps,
     cardClusterDataNormal,
     cardClusterDataWithoutMain,
     cardClusterDataWithoutMiniCards,
     cardClusterDataSetTotal
 };

storiesOf('Components|Card Cluster', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCardClusterComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
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
                    // TODO: details on object
                    value: 'A javascript object that contains all information needed to display the card cluster.',
                },
                {
                    name: 'passButton',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the button is clicked. It takes one argument, which is a click event.',
                },
                {
                    name: 'buttonClicked',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'A value that defines which button displays as selected.  "CardCluster[[id]]" where [[id]] is the index of the card that you want to select.  The main card has an index of 0 and every subsequent mini-card has an incremented index.',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
            ],
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataNormal"
                buttonClicked='CardCluster0'
                dataAutoId = 'testingID'
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }))
    .add('Without Main Card', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMain"
                buttonClicked='CardCluster1'
                dataAutoId = 'testingID'
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }))
    .add('No Mini Cards', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataWithoutMiniCards"
                buttonClicked='CardCluster0'
                dataAutoId = 'testingID'
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    })).add('Selected Card', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataNormal"
                buttonClicked='CardCluster4'
                dataAutoId = 'testingID'
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    })).add('Set Total', () => ({
        template: `
            <app-card-cluster
                [cardArray]="cardClusterDataSetTotal"
                buttonClicked='CardCluster4'
                dataAutoId = 'testingID'
                (passButton)="handleEvent($event)">
            </app-card-cluster>
        `,
        props,
    }));
