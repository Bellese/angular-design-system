import { storiesOf } from '@storybook/angular';
import Welcome from './welcome.component';
import Installation from './installation.component';

storiesOf('Introduction/Getting Started', module)
    .add('Welcome', () => ({
        component: Welcome,
        props: {},
    })).add('Installation', () => ({
        component: Installation,
        props: {},
    }));
