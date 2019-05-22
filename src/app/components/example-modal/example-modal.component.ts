import {
  Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.css']
})
export class ExampleModalComponent {

  @Input() modalTitle;
  @Input() modalData: Array<any>;
  @Input() modalCount: number;

  @Output() closeModal = new EventEmitter<any>();

  onClose() {
      this.closeModal.emit(true);
  }
}