import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';

// directives modules
import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
