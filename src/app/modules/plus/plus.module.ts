import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPlus } from './plus.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppPlus
  ],
  exports: [
    AppPlus
  ]
})
export class PlusModule { }
