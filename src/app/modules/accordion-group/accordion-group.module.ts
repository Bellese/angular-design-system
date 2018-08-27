import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../accordion-group/accordion/accordion.component"
import { AccordionHeaderComponent } from '../accordion-group/accordion/accordion-header/accordion-header.component'
import { AccordionBodyComponent } from '../accordion-group/accordion/accordion-body/accordion-body.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent
  ],
  declarations: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent
  ]
})
export class AccordionModule { }
