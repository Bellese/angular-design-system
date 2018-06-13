import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule { }
