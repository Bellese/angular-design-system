import { storiesOf } from '@storybook/angular';

import { SearchFieldComponent } from './search-field.component';

const moduleMetadata = {
    declarations: [SearchFieldComponent],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
};

storiesOf('Search Field', module)
    .add('Normal', () => ({
        moduleMetadata,
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
                (userInput)='announce($event)'
                (changes)="resetSearch = $event">
            </app-search-field>
        `,
        props
    }));
