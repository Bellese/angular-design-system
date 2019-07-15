import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from './modal.component';
import { AppModalShellComponent } from '../modal-shell/modal-shell.component';
import { AppButtonComponent } from '../button/button.component';
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';
import { ModalService } from '../../services/modal.service';

import { defaultProps } from '../../../../.storybook/helpers';

const modalData = [
    {
        'heading': 'Description'
    },
    {
        'paragraph': 'Severe Sepsis and Septic Shock'
    },
    {
        'heading': 'Supplemental Information'
    },
    {
        'hline': true
    },
    {
        'heading2': 'Volume Category Reference'
    },
    {
        'paragraph': 'Low: #26 min. (5)'
    },
    {
        'paragraph': 'Med: #43 min. (12)'
    },
    {
        'paragraph': 'High: #72 min. (8)'
    },
    {
        'heading2': 'Supplemental Information Footnotes'
    },
    {
        'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
    },
    {
        'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
    },
    {
        'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
    }
];

const props = {
    ...defaultProps,
    modalData,
    appTableModalComponent: AppTableModalComponent
};

storiesOf('Modal', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppModalComponent, AppTableModalComponent, AppModalShellComponent, AppButtonComponent],
            imports: [CommonModule],
            providers: [ModalService],
            entryComponents: [AppTableModalComponent],
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-modal
                modalTitle='modalTitle'
                [modalData]='modalData'
                content='Open Modal'
                [modalComponent]='appTableModalComponent'
            >
            </app-modal>
        `,
        props
    }));
