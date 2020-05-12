// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { CalendarModule } from './calendar.module';

storiesOf('Components|Calendar', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                CalendarModule,
            ]
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-calendar 
                label = 'Date Example'
                dataAutoId = 'testingID'>
            </app-calendar>
        `,
    }));
