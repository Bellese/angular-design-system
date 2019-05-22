import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { AppModalShellComponent } from './modal-shell.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppModalShellComponent],
  exports: [AppModalShellComponent]
})
export class ModalShellModule {}
