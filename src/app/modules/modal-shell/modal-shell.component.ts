import { 
    Component, 
    Input, 
    Output, 
    EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-modal-shell',
  templateUrl: './modal-shell.component.html',
  styleUrls: ['./modal-shell.component.css']
})
export class AppModalShell {

    @Input() modalTitle: any;
    @Input() modalClass: string;
    @Input() modalCount: number;

    @Output() closeModal = new EventEmitter<any>();

    findTab(e) {
        (e.target.id === "lastModalTab") ? document.getElementById("closeButton"+this.modalCount).focus() : false;
        (e.target.id === "firstModalTab") ? document.getElementById("cancelButton"+this.modalCount).focus() : false;
    }
    
    onClose() {
        this.closeModal.emit(true);
    }
}