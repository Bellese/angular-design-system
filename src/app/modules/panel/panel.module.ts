import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPanelComponent } from './panel.component';
import { PlusModule } from '../plus/plus.module';

import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  imports: [CommonModule, DirectiveModule, PlusModule],
  declarations: [AppPanelComponent],
  exports: [AppPanelComponent]
})
export class PanelModule {}
