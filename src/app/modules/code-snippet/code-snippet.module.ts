import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './code-snippet.component';
import { ButtonModule } from '../button/button.module';
import { ClipboardService } from 'ngx-clipboard';

@NgModule({
  declarations: [CodeSnippetComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CodeSnippetComponent
  ],
  providers: [
    ClipboardService
  ]
})
export class CodeSnippetModule { }
