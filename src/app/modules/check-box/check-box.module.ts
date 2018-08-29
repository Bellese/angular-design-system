import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCheckbox } from "./check-box.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AppCheckbox],
  exports: [AppCheckbox]
})
export class CheckboxModule {}
