import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatepickerComponent } from './date-picker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [AppDatepickerComponent],
  exports: [AppDatepickerComponent]
})
export class DatePickerModule { }
