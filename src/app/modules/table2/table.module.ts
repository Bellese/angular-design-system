// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TableComponent } from './table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableCellComponent } from './table-cell/table-cell.component';

// Component modules
import { ButtonModule } from '../button/button.module';
import { ChoiceModule } from '../choice/choice.module';
import { PagingModule } from '../paging/paging.module';
import { PopoverModule } from '../popover/popover.module';
import { SpinnerModule } from '../spinner/spinner.module';

// Ohter Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ChoiceModule,
    PagingModule,
    PopoverModule,
    NgxPaginationModule,
    SpinnerModule,
    FontAwesomeModule
  ],
  declarations: [
    TableComponent,
    TableHeaderComponent,
    TableCellComponent,
  ],
  exports: [
    TableComponent,
  ]
})
export class Table2Module { }
