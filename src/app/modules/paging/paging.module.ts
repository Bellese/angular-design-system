import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppPagination } from "./paging/paging.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [AppPagination],
  exports: [
    AppPagination
  ]
})
export class PagingModule {}
