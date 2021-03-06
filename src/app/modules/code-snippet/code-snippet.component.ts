import { Component, Input, OnInit } from '@angular/core';

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
    if (!this.codeSnippetModel) {
      this.codeSnippetModel = new CodeSnippetModel();
  }
  }

  onCopyContent() {
    let copyContent = '';
    if (!this.codeSnippetModel.copyContent) {
      for (const contentItem of this.codeSnippetModel.contentItems) {
        copyContent += ` ${contentItem.content}`;
      }
    } else {
      copyContent = this.codeSnippetModel.copyContent;
    }
    this.clipboardService.copyFromContent(copyContent);
    document
      .getElementById("copyButton")
      .getElementsByTagName("button")[0]
      .focus();
  }

}
