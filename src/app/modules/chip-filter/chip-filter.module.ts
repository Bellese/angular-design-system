import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChipFilterComponent } from './chip-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipFilterPipe } from './chip-filter.pipe';
import {ClickOutsideDirective} from './click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppChipFilterComponent,
    ClickOutsideDirective,
    ChipFilterPipe
  ],
  providers: [ChipFilterPipe],
  exports: [
    AppChipFilterComponent
  ]
})
export class ChipFilterModule { }

