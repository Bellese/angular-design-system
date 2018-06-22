import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatepicker } from './datepicker/date-picker.component';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [AppDatepicker],
  exports: [AppDatepicker]
})
export class DatepickerModule { }
