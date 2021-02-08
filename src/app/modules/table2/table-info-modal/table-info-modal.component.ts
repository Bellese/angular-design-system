import { Component, Input } from '@angular/core';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../../services/modal/modal.service';
import { ModalGenericComponent } from '../../modal-shell/modal-generic/modal-generic.component';
import { ModalGenericModel } from '../../modal-shell/modal-generic/modal-generic.model';
import { TableHeaderModel } from '../table.models';

@Component({
  selector: 'app-table-info-modal',
  templateUrl: './table-info-modal.component.html',
  styleUrls: ['./table-info-modal.component.css'],
})
export class TableInfoModalComponent {
  @Input() tableHeaderModel: TableHeaderModel;

  faInfoCircle = faInfoCircle;

  constructor(private modalService: ModalService) {}

  showModal() {
    const modalData = new ModalGenericModel({
      id: this.tableHeaderModel.label,
      body: this.tableHeaderModel.modalText,
      title: this.tableHeaderModel.label,
    });
    this.modalService.appendComponentToBody(
      ModalGenericComponent,
      this.buttonID,
      modalData.title,
      modalData,
      'actionOKButton'
    );
  }

  public get buttonID() {
    return this.tableHeaderModel.label.replace(/[^A-Z0-9]/gi, '_');
  }
}
