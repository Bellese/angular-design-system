import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAccordionComponent } from './accordion.component';

import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  imports: [CommonModule, DirectiveModule],
  declarations: [AppAccordionComponent],
  exports: [AppAccordionComponent]
})

export class AccordionModule {}
