import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { TableCellModel, TableCellTypeEnum } from '../table.models';

@Component({
  selector: 'app-table-cell-2',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})

export class TableCellComponent {
    @Input() tableCellModel: TableCellModel;
    @Output() cellClick = new EventEmitter<any>();

    TableCellTypeEnum = TableCellTypeEnum;

    cellClass() {
        const classes = ['table_cell'];
        if (this.tableCellModel.columnKey) {
            classes.push(`table_cell_${this.tableCellModel.columnKey}`);
        }
        if (this.tableCellModel.class) {
            classes.push(this.tableCellModel.class);
        }
        return classes;
    }

    checkboxClickEvent($event) {
        this.cellClick.emit({
            $event : $event,
            tableCellModel: this.tableCellModel
        });
    }

    buttonClickEvent($event) {
        if (this.tableCellModel.onClick) {
            this.tableCellModel.onClick($event);
        } else {
            console.warn('The button\'s click event was not configured.');
        }
    }
}
