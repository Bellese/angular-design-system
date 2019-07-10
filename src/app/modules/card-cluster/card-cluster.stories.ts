import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AppCardClusterComponent } from './card-cluster.component';
import cardClusterData from '../../../assets/data/cluster-data.json';

const cardClusterDataNormal = cardClusterData;

const cardClusterDataWithoutMain = { ...cardClusterData };
cardClusterDataWithoutMain.mainCard = false;

const cardClusterDataWithoutMiniCards = { ...cardClusterData };
cardClusterDataWithoutMiniCards.cluster = [];

storiesOf('Card Cluster', module)
    .add('Normal', () => ({
        component: AppCardClusterComponent,
        props: {
            cardArray: cardClusterDataNormal,
            dataAutoId: 'testingID',
            passButton: action('The following value is emitted when a button is clicked'),
        },
    }))
    .add('Without Main Card', () => ({
        component: AppCardClusterComponent,
        props: {
            cardArray: cardClusterDataWithoutMain,
            dataAutoId: 'testingID',
            passButton: action('The following value is emitted when a button is clicked'),
        },
    }))
    .add('No Mini Cards', () => ({
        component: AppCardClusterComponent,
        props: {
            cardArray: cardClusterDataWithoutMiniCards,
            dataAutoId: 'testingID',
            passButton: action('The following value is emitted when a button is clicked'),
        },
    })).add('Selected Card', () => ({
        component: AppCardClusterComponent,
        props: {
            cardArray: cardClusterDataNormal,
            dataAutoId: 'testingID',
            passButton: action('The following value is emitted when a button is clicked'),
            buttonClicked: 'CardCluster4'
        },
    }));