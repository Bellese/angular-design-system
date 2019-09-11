import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './code-snippet.component';
import { ButtonModule } from '../button/button.module';
import { ClipboardService } from 'ngx-clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CodeSnippetComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FontAwesomeModule
  ],
  exports: [
    CodeSnippetComponent
  ],
  providers: [
    ClipboardService
  ]
})
export class CodeSnippetModule { }
