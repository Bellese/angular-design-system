// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { TableInfoModalComponent } from './table-info-modal/table-info-modal.component';
import { ModalShellModule } from '../modal-shell/modal-shell.module';
import { ModalService } from '../../services/modal/modal.service';
import { ModalGenericComponent } from '../modal-shell/modal-generic/modal-generic.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ChoiceModule,
    PagingModule,
    PopoverModule,
    NgxPaginationModule,
    SpinnerModule,
    FontAwesomeModule,
    ModalShellModule,
  ],
  declarations: [TableComponent, TableHeaderComponent, TableCellComponent, TableInfoModalComponent],
  exports: [TableComponent],
})
export class Table2Module {
  static forRoot(): ModuleWithProviders<Table2Module> {
    return {
      ngModule: Table2Module,
    };
  }
}
