import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppChipFilterComponent} from './chip-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipFilterPipe} from './chip-filter.pipe';
import {ClickOutsideDirective} from './click-outside.directive';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    FontAwesomeModule
  ],
  declarations: [
    AppChipFilterComponent,
    ClickOutsideDirective,
    ChipFilterPipe
  ],
  providers: [ChipFilterPipe],
  exports: [
    AppChipFilterComponent,
    MatChipsModule,
    MatInputModule,
  ]
})
export class ChipFilterModule {
}

