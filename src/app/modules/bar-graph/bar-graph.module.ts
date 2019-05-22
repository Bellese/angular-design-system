import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './bar-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    ModalModule
  ],
  declarations: [BarGraphComponent],
  exports: [
    BarGraphComponent,
    NgxChartsModule
  ]
})
export class BarGraphModule { }
