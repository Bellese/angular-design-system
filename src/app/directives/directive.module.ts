import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button-focus'
import { ModalDirective } from './modal-host'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonDirective,
    ModalDirective
  ],
  exports: [
    ButtonDirective,
    ModalDirective
  ]
})
export class DirectiveModule { }
