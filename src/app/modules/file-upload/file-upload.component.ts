import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploadModel } from './file-upload.model';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  @Input() fileUploadModel: FileUploadModel;
  @Output() onFileUpload = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput: ElementRef;

  ngOnInit() {
    if (!this.fileUploadModel) {
      this.fileUploadModel = new FileUploadModel();
    }
  }

  uploadFile(event) {
    if (event.files) {
      // ts workaround since `files` doesn't exist on EventTarget
      // and I can't cast types in the template
      event = event.files
    }
    const files = [];
    for (const file of event) {
      files.push(file);
    }
    this.onFileUpload.emit(files);
    this.fileInput.nativeElement.value = '';
  }

  promptUpload() {
    this.fileInput.nativeElement.click();
  }

}
