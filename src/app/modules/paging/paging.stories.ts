import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppPaginationComponent } from './paging.component';

import { defaultProps } from '../../../../.storybook/helpers';

const props = {
    ...defaultProps,
    list: [1, 2, 3, 4, 5, 6, 7, 8]
};

storiesOf('Components|Paging', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppPaginationComponent],
            imports: [NgxPaginationModule],
        }),
    )
    .add('Normal', () => ({
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

