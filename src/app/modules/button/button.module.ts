import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './button.component';

import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  imports: [CommonModule, DirectiveModule],
  declarations: [AppButtonComponent],
  exports: [AppButtonComponent]
})
export class ButtonModule {}
