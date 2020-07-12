// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { ChipFilterModule} from './chip-filter.module';

const props = {
    ...defaultProps,
    tags: []
};

storiesOf('Components|Drop Down', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ChipFilterModule,
            ]
        }),
    )
    .add('Default', () => ({
        template: `
            <app-chip-filter
                [tags]="tags"
                (tagsChange)="tags = $event">
            </app-chip-filter>
        `,
        props,
    }))
