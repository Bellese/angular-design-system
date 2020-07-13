import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppChipFilterComponent} from './chip-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipFilterPipe} from './chip-filter.pipe';
import {ClickOutsideDirective} from './click-outside.directive';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
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
    MatIconModule,
    MatInputModule,
  ]
})
export class ChipFilterModule {
}

