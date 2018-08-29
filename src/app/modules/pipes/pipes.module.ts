import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";
import { FilterTypePipe } from "./filter-type.pipe";
import { GraphToolTipPipe } from "./graph-tooltip.pipe";
import { SortingPipe } from "./sorting.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [FilterPipe, FilterTypePipe, GraphToolTipPipe, SortingPipe],
  exports: [FilterPipe, FilterTypePipe, GraphToolTipPipe, SortingPipe]
})
export class PipesModule {}
