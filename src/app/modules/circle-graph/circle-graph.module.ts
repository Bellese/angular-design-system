import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCircleGraph } from "./circle-graph.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipesModule } from '../../pipes/pipes.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, NgxChartsModule, PipesModule, ButtonModule],
  declarations: [AppCircleGraph],
  exports: [AppCircleGraph]
})
export class CircleGraphModule {}
