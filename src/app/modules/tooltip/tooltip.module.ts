// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { ButtonModule } from '../button/button.module';

// Components
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, NgxTippyModule, ButtonModule],
  exports: [TooltipComponent],
})
export class TooltipModule {}
