import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { AppTableComponent } from './table/table.component';
import { AppTableDataComponent } from './table-data/table-data.component';
import { AppTableHeaderComponent } from './table-header/table-header.component';
import { AppTableModalComponent } from './table-modal/table-modal.component';
import { AppTableRowComponent } from './table-row/table-row.component';

// component modules
import { ButtonModule } from '../button/button.module';
import { ChoiceModule } from '../choice/choice.module';
import { ModalModule } from '../modal/modal.module';
import { ModalShellModule } from '../modal-shell/modal-shell.module';
import { PopoverModule } from '../popover/popover.module';
import { PagingModule } from '../paging/paging.module';
import { StarModule } from '../star/star.module';
import { TextFieldModule } from '../text-field/text-field.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// external
import { NgxPaginationModule } from 'ngx-pagination';

// directives modules
import { DirectiveModule } from '../../directives/directive.module';

// pipes modules
import { PipesModule } from '../../pipes/pipes.module';
import { FilterPipe } from '../../pipes/filter.pipe';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ButtonModule,
    ChoiceModule,
    DirectiveModule,
    PagingModule,
    StarModule,
    TextFieldModule,
    PipesModule,
    ModalModule,
    ModalShellModule,
    PopoverModule,
    FontAwesomeModule,
    TooltipModule
  ],
  declarations: [
    AppTableComponent,
    AppTableDataComponent,
    AppTableHeaderComponent,
    AppTableModalComponent,
    AppTableRowComponent,
  ],
  exports: [
    AppTableComponent,
    AppTableDataComponent,
    AppTableHeaderComponent,
    AppTableModalComponent,
    AppTableRowComponent,
  ],
})
export class TableModule {
  static forRoot(): ModuleWithProviders<TableModule> {
    return {
      ngModule: TableModule,
      providers: [FilterPipe],
    };
  }
}
