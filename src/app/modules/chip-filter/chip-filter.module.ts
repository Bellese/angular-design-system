import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipFilterComponent } from './chip-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChipFilterComponent
  ],
  exports: [
    ChipFilterComponent
  ]
})
export class ChipFilterModule { }
