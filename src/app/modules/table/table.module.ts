import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { AppTable } from './table/table.component';
import { AppTableData } from './table-data/table-data.component';
import { AppTableDescr } from './table-description/table-description.component';
import { AppTableHeader } from './table-header/table-header.component';
import { AppTableRow } from './table-row/table-row.component';
import { AppTableSearch } from './table-search/table-search.component';
import { AppCheckbox } from './checkbox/checkbox.component'
import { AppTextField } from './text-field/text-field.component'
import { NgxPaginationModule } from "ngx-pagination";
import { PagingModule } from '../paging/paging.module'
import { ButtonModule } from '../button/button.module'

import { DirectiveModule } from '../../directives/directive.module'

import { FilterPipe } from "./filter.pipe";
import { FilterTypepipe } from "./filterType.pipe";
import { SortingPipe } from "./sorting.pipe";


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ButtonModule,
    DirectiveModule,
    PagingModule
  ],
  declarations: [
    AppTable,
    AppTableData,
    AppTableDescr,
    AppTableHeader,
    AppTableRow,
    AppTableSearch,
    AppCheckbox,
    AppTextField,
    FilterPipe,
    FilterTypepipe,
    SortingPipe
  ],
  exports: [
    AppTable,
    AppTableData,
    AppTableDescr,
    AppTableHeader,
    AppTableRow,
    AppTableSearch,
    FilterPipe,
    FilterTypepipe,
    SortingPipe
  ]
})
export class TableModule { }
