import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDragDropDirective } from './file-upload-drag-drop.directive';
import { DataTestDirective } from './data-test.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileUploadDragDropDirective,
    DataTestDirective
  ],
  exports: [
    FileUploadDragDropDirective
  ]
})
export class DirectiveModule { }
