// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Modules
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { ButtonModule } from '../button/button.module';

// Components
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, FontAwesomeModule, NgxTippyModule, ButtonModule],
  exports: [TooltipComponent],
})
export class TooltipModule {}
