import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component'
import { AccordionComponent } from './accordion/accordion.component'
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component'
import { AccordionContentComponent } from './accordion-content/accordion-content.component'
import { PlusComponent } from './plus/plus.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordionGroupComponent,
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    PlusComponent
  ],
  exports: [
    AccordionGroupComponent,
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    PlusComponent
  ]
})
export class AccordionModule { }
