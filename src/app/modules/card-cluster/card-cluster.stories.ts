import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppCardClusterComponent } from './card-cluster.component';

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

storiesOf('Card Cluster', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppCardClusterComponent],
        }),
    )
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
