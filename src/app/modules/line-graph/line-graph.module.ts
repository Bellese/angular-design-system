import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLineGraphComponent } from './line-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipesModule } from '../../pipes/pipes.module';
import { DropdownModule } from '../drop-down/drop-down.module';

@NgModule({
  imports: [CommonModule, NgxChartsModule, PipesModule, DropdownModule],
  declarations: [AppLineGraphComponent],
  exports: [AppLineGraphComponent]
})
export class LineGraphModule {}
