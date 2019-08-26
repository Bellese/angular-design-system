import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDragDropDirective } from './file-upload-drag-drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileUploadDragDropDirective
  ],
  exports: [
    FileUploadDragDropDirective
  ]
})
export class DirectiveModule { }
