import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FileUploadModel } from './file-upload.model';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  @Input() fileUploadModel: FileUploadModel;
  @Output() onFileUpload = new EventEmitter<any>();

  ngOnInit() {
    if (!this.fileUploadModel) {
      this.fileUploadModel = new FileUploadModel();
    }
  }

  uploadFile(event) {
    for (const file of event) {
      this.onFileUpload.emit(file);
    }
  }

}
