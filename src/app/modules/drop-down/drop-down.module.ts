import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDropDownComponent } from './drop-down.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppDropDownComponent
  ],
  exports: [
    AppDropDownComponent
  ]
})
export class DropdownModule { }
