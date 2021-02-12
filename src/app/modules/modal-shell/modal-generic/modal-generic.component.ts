import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-generic-ds',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss'],
})
export class ModalGenericComponent implements OnInit {
  @Input() modalTitle;
  @Input() modalData;
  @Input() modalCount;
  @Input() heyyyyy;

  @Output() closeModal = new EventEmitter<any>();

  onConfirmData;

  constructor() {}

  ngOnInit() {}

  handleClose($event) {
    this.closeModal.emit($event);
  }

  setOnConfirmData(data) {
    this.onConfirmData = data;
  }

  confirm(buttonFunc?: any, $event?) {
    this.handleClose($event);
    if (this.modalData.onConfirm) {
      this.modalData.onConfirm(this.onConfirmData);
    } else if (buttonFunc) {
      buttonFunc(this.onConfirmData);
    }
  }
}
