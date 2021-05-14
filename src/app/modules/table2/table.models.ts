import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';
import { PopoverModel } from '../popover/popover.model';

/***********************
 * Table Header Models
 ***********************/

export enum TableHeaderTypeEnum {
  DEFAULT = 'default',
  SORT = 'sort',
  CHECKBOX = 'checkbox',
}

export enum TableHeaderSortEnum {
  NONE = 'none',
  ASC = 'asc',
  DESC = 'desc',
}

export class TableHeaderModel extends AngularDesignSystemModel {
  columnKey: string;
  label: string;
  type: TableHeaderTypeEnum = TableHeaderTypeEnum.DEFAULT;
  cellClass = '';
  class = '';
  rowspan: number;
  colspan: number;
  isRowHeader = false;
  headerWidth?: string;
  modalText?: string;

  // Sort Properties
  sort?: TableHeaderSortEnum = TableHeaderSortEnum.NONE;

  // Checkbox Properties
  isChecked? = false;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}

/***********************
 * Table Row Models
 ***********************/

export enum TableCellTypeEnum {
  DEFAULT = 'default',
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  POPOVER = 'popover',
}

// tslint:disable-next-line: max-classes-per-file
export class TableCellModel extends AngularDesignSystemModel {
  columnKey: string;
  label: string;
  ariaLabel?: string;
  type?: TableCellTypeEnum = TableCellTypeEnum.DEFAULT;
  class? = '';
  cellClass? = '';
  colspan: number;
  modalText?: string;

  // Icon Properties
  icon?: IconDefinition;
  iconClass? = '';

  // Button Properties
  buttonDisabled? = false;
  buttonOnClick?: any;
  buttonClass?: string;

  // Checkbox Properties
  checkboxValue: string;
  isChecked? = false;

  // Popover Properties
  popoverModel: PopoverModel;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }

  toggleCheckbox(isChecked) {
    this.isChecked = isChecked;
  }
}

/***********************
 * Table Row Models
 ***********************/

// tslint:disable-next-line: max-classes-per-file
export class TableHeaderRowModel extends AngularDesignSystemModel {
  cells: TableHeaderModel[] = [];
  class: string;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class TableRowModel extends AngularDesignSystemModel {
  cells: TableCellModel[] = [];
  class: string;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}

/***********************
 * Table Pagination Models
 ***********************/

// tslint:disable-next-line: max-classes-per-file
export class TablePaginationModel extends AngularDesignSystemModel {
  isEnabled = true;
  perPage = 10;
  currentPage = 1;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}

/***********************
 * Table Model
 ***********************/

// tslint:disable-next-line: max-classes-per-file
export class TableModel extends AngularDesignSystemModel {
  id: string;
  headerRows?: TableHeaderRowModel[] = [];
  headers: TableHeaderModel[] = []; // deprecated and replaced with headerRows
  rows: TableRowModel[] = [];
  totalRows: number;
  summary: string;
  class?: string;
  headerClass?: string;
  pagination: TablePaginationModel = new TablePaginationModel({});
  isLoading = false;
  showTable = true;

  // This will get set automatically, do not set this by hand
  _rowHeaderIndex: number;

  constructor(options?: any) {
    super();
    this.setOptions(options);

    // Convert headers paramater to headerRows parameter and unset headers
    if (this.headers.length && !this.headerRows.length) {
      this.headerRows = [new TableHeaderRowModel({ cells: this.headers })];
    }
    // this.headers = null;

    let rowHeaderIndex = 0;
    for (const headerRow of this.headerRows) {
      rowHeaderIndex = 0;
      for (const header of headerRow.cells) {
        if (header.isRowHeader) {
          break;
        }
        rowHeaderIndex += header.colspan || 1;
      }
      if (rowHeaderIndex) {
        break;
      }
    }
    this._rowHeaderIndex = rowHeaderIndex;
  }

  toggleSort(columnKey: string): void {
    for (const headerRow of this.headerRows) {
      for (const header of headerRow.cells) {
        if (header.columnKey === columnKey) {
          if (header.sort === TableHeaderSortEnum.NONE || header.sort === TableHeaderSortEnum.ASC) {
            header.sort = TableHeaderSortEnum.DESC;
          } else {
            header.sort = TableHeaderSortEnum.ASC;
          }
        } else {
          header.sort = TableHeaderSortEnum.NONE;
        }
      }
    }
  }

  toggleSelectAll(columnKey: string, isChecked: boolean): void {
    for (const headerRow of this.headerRows) {
      headerRow.cells
        .filter((header) => header.columnKey === columnKey)
        .map((header) => {
          header.isChecked = isChecked;
        });
    }

    // Set isChecked value in model for each related cell
    for (const row of this.rows) {
      for (const cell of row.cells) {
        if (cell.columnKey === columnKey) {
          cell.isChecked = isChecked;
        }
      }
    }
  }

  unselectHeaderCheckbox(columnKey: string): void {
    for (const headerRow of this.headerRows) {
      headerRow.cells
        .filter((header) => header.columnKey === columnKey)
        .map((header) => {
          header.isChecked = false;
        });
    }
  }

  public getSelectedCheckboxValues(columnKey: string): string[] {
    const checkedValues: string[] = [];
    for (const row of this.rows) {
      for (const cell of row.cells.filter((currentCell) => currentCell.columnKey === columnKey)) {
        if (cell.isChecked) {
          checkedValues.push(cell.checkboxValue);
        }
      }
    }
    return checkedValues;
  }
}
