import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class AppModalComponent {

    @Input() modalTitle: any;
    @Input() modalData: Array<any>;
    @Input() modalComponent: any;
    @Input() firstFocus: string;
    @Input() content: string;
    @Input() buttonClass: string;
    @Input() abbr: string;
    @Input() id: string;
    @Input() dataAutoId: string;
 
    constructor(private modalService: ModalService) {
    }

    addToBody(e) {
        // build modal with service
        this.modalService.appendComponentToBody(this.modalComponent, this.id, this.modalTitle, this.modalData, this.firstFocus);
    }
}