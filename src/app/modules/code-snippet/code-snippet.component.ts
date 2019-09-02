import { Component, OnInit, Input } from '@angular/core';

// Models
import { CodeSnippetModel } from './code-snippet.model';

// Services
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {

  @Input() codeSnippetModel: CodeSnippetModel;

  constructor(
    private clipboardService: ClipboardService
  ) { }

  ngOnInit() {
    if (!this.codeSnippetModel.copyContent) {
      this.codeSnippetModel.copyContent = '';
      for (const contentItem of this.codeSnippetModel.contentItems) {
        this.codeSnippetModel.copyContent += ` ${contentItem.content}`;
      }
    }
  }

  onCopyContent() {
    this.clipboardService.copyFromContent(this.codeSnippetModel.copyContent);
  }

}
