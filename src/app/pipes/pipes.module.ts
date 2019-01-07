import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";
import { HighlightSearchPipe } from "./highlightSearch.pipe";
import { GraphToolTipPipe } from "./graph-tooltip.pipe";
import { SortingPipe } from "./sorting.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [FilterPipe, HighlightSearchPipe, GraphToolTipPipe, SortingPipe],
  exports: [FilterPipe, HighlightSearchPipe, GraphToolTipPipe, SortingPipe]
})
export class PipesModule {}
