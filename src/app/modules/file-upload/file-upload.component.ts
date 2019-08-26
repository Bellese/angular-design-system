import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() label: string;
  @Input() ariaLabel: string;

  @Output() onFileUploaded = new EventEmitter<any>();

  defaults = {
    label: 'Drag files here to upload',
    ariaLabel: 'Activate enter key to upload files'
  };

  constructor() { }

  ngOnInit() {
  }

  uploadFile(event) {
    for (const file of event) {
      this.onFileUploaded.emit(file);
    }
  }
}
