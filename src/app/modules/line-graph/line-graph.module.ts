import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLineGraphComponent } from './line-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipesModule } from '../../pipes/pipes.module';
import { DropdownModule } from '../drop-down/drop-down.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, NgxChartsModule, PipesModule, DropdownModule, FontAwesomeModule],
  declarations: [AppLineGraphComponent],
  exports: [AppLineGraphComponent]
})
export class LineGraphModule {}
