import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadQueComponent } from './download-que.component';

@NgModule({
  declarations: [DownloadQueComponent],
  exports: [DownloadQueComponent],
  imports: [
    CommonModule
  ]
})
export class DownloadQueModule { }
