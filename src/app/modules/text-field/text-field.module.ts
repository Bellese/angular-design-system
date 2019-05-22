import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTextFieldComponent } from './text-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppTextFieldComponent],
  exports: [AppTextFieldComponent]
})
export class TextFieldModule {}
