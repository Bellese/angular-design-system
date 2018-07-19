import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './bar-graph.component'
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [BarGraphComponent],
  exports: [
    BarGraphComponent
  ]
})
export class BarGraphModule { }
