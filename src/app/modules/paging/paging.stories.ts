import { storiesOf } from '@storybook/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppPaginationComponent } from './paging.component';

const moduleMetadata = {
    declarations: [AppPaginationComponent],
    imports: [NgxPaginationModule],
};

function announce(e) {
    console.log(e);
}

const props = {
    announce: announce,
    list: [1, 2, 3, 4, 5, 6, 7, 8]
};

storiesOf('Paging', module)
    .add('Normal', () => ({
        moduleMetadata,
        template: `
            <ul>
                <li *ngFor="let item of list | paginate: { itemsPerPage: 3, currentPage: p}">
                    {{item}}
                </li>
            </ul>
            <app-paging (currentPage)="p = $event"></app-paging>
        `,
        props
    }));

