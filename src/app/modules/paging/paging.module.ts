import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationComponent } from './paging.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [AppPaginationComponent],
  exports: [
    NgxPaginationModule,
    AppPaginationComponent
  ]
})
export class PagingModule {}
