import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPlusComponent } from './plus.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppPlusComponent
  ],
  exports: [
    AppPlusComponent
  ]
})
export class PlusModule { }
