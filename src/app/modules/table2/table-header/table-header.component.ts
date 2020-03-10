import { Component, Input, EventEmitter, Output } from '@angular/core';

// Models
import { TableHeaderModel, TableHeaderSortEnum, TableHeaderTypeEnum } from '../table.models';

// Misc
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-header-2',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})

export class TableHeaderComponent {
    @Input() tableHeaderModel: TableHeaderModel;
    @Output() headerClick = new EventEmitter<object>();

    TableHeaderSortEnum = TableHeaderSortEnum;
    TableHeaderTypeEnum = TableHeaderTypeEnum;

    faCaretDown = faCaretDown;
    faCaretUp = faCaretUp;

    headerClickEvent($event) {
        this.headerClick.emit({
            $event: $event,
            tableHeaderModel: this.tableHeaderModel,
        });
    }
}
