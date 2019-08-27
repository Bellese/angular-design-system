import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileUploadModel } from './file-upload.model';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {

  @Input() fileUploadModel: FileUploadModel;
  @Output() onFileUpload = new EventEmitter<any>();

  fileUploadModelDefaults: FileUploadModel = {
    id: 'file_upload',
    dataAutoId: 'file_upload',
    label: 'Drag files here to upload',
    ariaLabel: 'Activate enter key to upload files',
    className: 'ds-u-fill--gray-lightest',
    height: 'auto'
  };

  uploadFile(event) {
    for (const file of event) {
      this.onFileUpload.emit(file);
    }
  }

  getValue(settingName) {
    if (this.fileUploadModel && this.fileUploadModel[settingName]) {
      return this.fileUploadModel[settingName];
    } else {
      return this.fileUploadModelDefaults[settingName]
    }
  }
}
