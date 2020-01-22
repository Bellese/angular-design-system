import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '../button/button.module';
import { DirectiveModule } from '../../directives/directive.module';

// components
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    ButtonModule,
    FontAwesomeModule
  ],
  declarations: [
    FileUploadComponent,
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
