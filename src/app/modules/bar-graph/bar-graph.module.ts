import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ButtonModule } from '../button/button.module';
import { ModalModule } from '../modal/modal.module';
import { BarGraphComponent } from './bar-graph.component';

@NgModule({
  imports: [CommonModule, NgxChartsModule, ModalModule, ButtonModule, FontAwesomeModule],
  declarations: [BarGraphComponent],
  exports: [BarGraphComponent, NgxChartsModule],
})
export class BarGraphModule {}
