import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChoiceComponent } from './choice.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppChoiceComponent],
  exports: [AppChoiceComponent]
})
export class ChoiceModule {}

