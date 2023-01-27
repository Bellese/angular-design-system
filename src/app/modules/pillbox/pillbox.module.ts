import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPillboxComponent } from './pillbox.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  declarations: [
    AppPillboxComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    DirectiveModule,
  ],
  exports: [
    AppPillboxComponent
  ]
})
export class PillboxModule { }
