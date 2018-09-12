import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLink } from '@angular/router';

//internal modules
import { AppCheckBox } from '../check-box/check-box.component';
import { AppTable } from './table/table.component';
import { AppTableData } from './table-data/table-data.component';
import { AppTableHeader } from './table-header/table-header.component';
import { AppTableModal } from './table-modal/table-modal.component';
import { AppTableRow } from './table-row/table-row.component';
import { AppTableSearch } from './table-search/table-search.component';
import { ButtonModule } from '../button/button.module';
import { PagingModule } from '../paging/paging.module';
import { StarModule } from '../star/star.module';

//external
import { NgxPaginationModule } from "ngx-pagination";

//directives
import { DirectiveModule } from '../../directives/directive.module';

//pipes
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ButtonModule,
    DirectiveModule,
    PagingModule,
    StarModule,
    PipesModule
  ],
  declarations: [
    AppTable,
    AppTableData,
    AppTableHeader,
    AppTableModal,
    AppTableRow,
    AppTableSearch,
    AppCheckBox
  ],
  entryComponents: [
    AppTableModal
  ],
  exports: [
    AppTable,
    AppTableData,
    AppTableHeader,
    AppTableRow,
    AppTableSearch
  ]
})
export class TableModule { }
