import { Component, Input, OnInit } from '@angular/core';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../../services/modal/modal.service';
import { ModalGenericComponent } from '../../modal-shell/modal-generic/modal-generic.component';
import { ModalGenericModel } from '../../modal-shell/modal-generic/modal-generic.model';
import { TableCellModel, TableHeaderModel } from '../table.models';

@Component({
  selector: 'app-table-info-modal',
  templateUrl: './table-info-modal.component.html',
  styleUrls: ['./table-info-modal.component.css'],
})
export class TableInfoModalComponent implements OnInit {
  @Input() infoModel: TableHeaderModel | TableCellModel;

  faInfoCircle = faInfoCircle;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    if (!this.infoModel) {
      this.infoModel = new TableHeaderModel();
    }
  }

  showModal(): void {
    const modalData = new ModalGenericModel({
      id: this.infoModel.label,
      body: this.infoModel.modalText,
      title: this.infoModel.label,
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
    return this.infoModel.label?.replace(/[^A-Z0-9]/gi, '_') ?? 'ModalButton';
  }
}
