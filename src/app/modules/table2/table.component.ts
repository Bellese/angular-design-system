import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// Models
import { TableModel, TableHeaderTypeEnum, TableCellTypeEnum, TableHeaderRowModel } from './table.models';

@Component({
  selector: 'app-table-2',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableModel: TableModel;

  @Output() paginationClick = new EventEmitter<any>();
  @Output() sortClick = new EventEmitter<any>();

  constructor() {}

  headerClick(event) {
    switch (event.tableHeaderModel.type) {
      case TableHeaderTypeEnum.SORT:
        this.tableModel.toggleSort(event.tableHeaderModel.columnKey);
        this.sortClick.emit(event);
        break;

      case TableHeaderTypeEnum.CHECKBOX:
        this.tableModel.toggleSelectAll(event.tableHeaderModel.columnKey, event.$event.target.checked);
        break;
    }
  }

  cellClick(event) {
    switch (event.tableCellModel.type) {
      case TableCellTypeEnum.CHECKBOX:
        event.tableCellModel.toggleCheckbox(event.$event.target.checked);
        this.tableModel.unselectHeaderCheckbox(event.tableCellModel.columnKey);
        break;
    }
  }

  paginationClickEvent($event) {
    this.tableModel.pagination.currentPage = $event;
    this.paginationClick.emit($event);
  }

  getSelectedCheckboxValues(columnKey): string[] | boolean {
    const checkboxHeader = this.tableModel.headers.filter((header) => header.columnKey === columnKey)[0];
    if (checkboxHeader.isChecked) {
      return true;
    } else {
      return this.tableModel.getSelectedCheckboxValues(columnKey);
    }
  }
}
