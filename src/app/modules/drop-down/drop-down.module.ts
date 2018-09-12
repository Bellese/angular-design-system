import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDropDown } from './drop-down.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppDropDown
  ],
  exports: [
    AppDropDown
  ]
})
export class DropdownModule { }
