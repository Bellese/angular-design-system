import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";
import { FilterTypepipe } from "./filterType.pipe";
import { GraphToolTippipe } from "./graph-tooltip.pipe";
import { SortingPipe } from "./sorting.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [FilterPipe, FilterTypepipe, GraphToolTippipe, SortingPipe],
  exports: [FilterPipe, FilterTypepipe, GraphToolTippipe, SortingPipe]
})
export class PipesModule {}
