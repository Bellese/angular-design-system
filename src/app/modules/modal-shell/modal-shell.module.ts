import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { AppModalShellComponent } from './modal-shell.component';
import { ModalGenericComponent } from './modal-generic/modal-generic.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppModalShellComponent, ModalGenericComponent],
  exports: [AppModalShellComponent, ModalGenericComponent],
})
export class ModalShellModule {}
