import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SearchFieldComponent } from './search-field.component';

import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Search Field', module)
    .addDecorator(
        moduleMetadata({
            declarations: [SearchFieldComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-search-field
                [reset]='resetSearch'
                showReset = true
                placeHolder='Search'
                title='Search Field'
                id='tableSearch'
                inputClass='searchInput'
                labelClass='searchLabel'
                hint='Enter a search here'
                hintClass='searchHint'
                dataAutoId='testingID'
                (userInput)='handleClick($event)'
                (changes)="resetSearch = $event">
            </app-search-field>
        `,
        props: defaultProps
    }));