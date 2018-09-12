import { 
    Component, 
    Input, 
    Output,
    EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.css']
})
export class AppTableModal {
    
    @Input() modalTitle;
    @Input() modalData: Array<any>;
    @Input() modalCount: number;

    @Output() closeModal = new EventEmitter<any>();
     
    newModalData = "Are you sure you want to accept this?"
    
    onClose() {
        this.closeModal.emit(true);
    }

}