import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLink } from '@angular/router';

//components
import { AppTable } from './table/table.component';
import { AppTableData } from './table-data/table-data.component';
import { AppTableHeader } from './table-header/table-header.component';
import { AppTableModal } from './table-modal/table-modal.component';
import { AppTableRow } from './table-row/table-row.component';

//component modules
import { ButtonModule } from '../button/button.module';
import { CheckBoxModule } from '../check-box/check-box.module';
import { ModalModule } from '../modal/modal.module';
import { ModalShellModule } from '../modal-shell/modal-shell.module';
import { PagingModule } from '../paging/paging.module';
import { StarModule } from '../star/star.module';
import { TextFieldModule } from '../text-field/text-field.module'

//external
import { NgxPaginationModule } from "ngx-pagination";

//directives modules
import { DirectiveModule } from '../../directives/directive.module';

//pipes modules
import { PipesModule } from '../../pipes/pipes.module';
import { FilterPipe } from'../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ButtonModule,
    CheckBoxModule,
    DirectiveModule,
    PagingModule,
    StarModule,
    TextFieldModule,
    PipesModule,
    ModalModule,
    ModalShellModule
  ],
  declarations: [
    AppTable,
    AppTableData,
    AppTableHeader,
    AppTableModal,
    AppTableRow
  ],
  entryComponents: [
    AppTableModal
  ],
  exports: [
    AppTable,
    AppTableData,
    AppTableHeader,
    AppTableModal,
    AppTableRow
  ]
})
export class TableModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TableModule,
            providers: [ FilterPipe ]
        }
    }
}
