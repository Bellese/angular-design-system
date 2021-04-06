import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDropDownComponent } from './drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AlertModule } from './../alert/alert.module';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormlyModule, AlertModule],
  declarations: [AppDropDownComponent],
  exports: [AppDropDownComponent],
})
export class DropdownModule {}
