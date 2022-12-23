import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPillboxComponent } from './pillbox.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [
    AppPillboxComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ],
  exports: [
    AppPillboxComponent
  ]
})
export class PillboxModule { }
