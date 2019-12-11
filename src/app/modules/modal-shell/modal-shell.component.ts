import {
    Component,
    Input,
    Output,
    EventEmitter,
    TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-modal-shell',
  templateUrl: './modal-shell.component.html',
  styleUrls: ['./modal-shell.component.css']
})
export class AppModalShellComponent {

    @Input() modalTitle: any;
    @Input() modalClass: string;
    @Input() modalCount: number;
    @Input() jawsBody: boolean;
    @Input() modalData;
    @Input() dataAutoId: string;

    @Output() closeModal = new EventEmitter<any>();

    @Input() headerTemplate: TemplateRef<any>;
    @Input() bodyTemplate: TemplateRef<any>;
    @Input() footerTemplate: TemplateRef<any>;

    findTab(e) {
        if (e.target.id === 'lastModalTab') { document.getElementById('closeButton' + this.modalCount).focus(); }
        if (e.target.id === 'firstModalTab') {
            const buttons = document.querySelectorAll('.ds-c-dialog__actions button');
            if (buttons.length) {
                (buttons[buttons.length - 1] as HTMLElement).focus();
            }
        }
    }

    onClose() {
        this.closeModal.emit(true);
    }

    get getTitle() {
        return {
            modalHeader: {
                modalTitle: this.modalTitle,
                modalCount: this.modalCount
            }
        };
    }

    get getBody() {
        return {
            modalBody: {
                modalData: this.modalData
            }
        };
    }
}