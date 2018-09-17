import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppTextField } from './text-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppTextField],
  exports: [AppTextField]
})
export class TextFieldModule {}
