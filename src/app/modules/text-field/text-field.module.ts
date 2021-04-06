import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTextFieldComponent } from './text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AlertModule } from './../alert/alert.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormlyModule, AlertModule],
  declarations: [AppTextFieldComponent],
  exports: [AppTextFieldComponent],
})
export class TextFieldModule {}
