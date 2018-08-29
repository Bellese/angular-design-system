import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCheckBox } from "./check-box.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AppCheckBox],
  exports: [AppCheckBox]
})
export class CheckBoxModule {}
