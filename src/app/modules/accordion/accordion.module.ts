import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppAccordion } from "./accordion.component";

import { DirectiveModule } from '../../directives/directive.module'

@NgModule({
  imports: [CommonModule, DirectiveModule],
  declarations: [AppAccordion],
  exports: [AppAccordion]
})
export class AccordionModule {}