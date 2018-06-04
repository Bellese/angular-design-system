import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppButton } from "./button.component";

import { DirectiveModule } from '../../directives/directive.module'

@NgModule({
  imports: [CommonModule, DirectiveModule],
  declarations: [AppButton],
  exports: [AppButton]
})
export class ButtonModule {}
