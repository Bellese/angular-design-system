import { Directive, Output, EventEmitter, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFileUploadDragDrop]'
})
export class FileUploadDragDropDirective implements OnInit {

  constructor() { }

  @Input() fileUploadDragDropClassName: string;
  @Input() fileUploadDragDropClassNameActive: string;
  @Output() onFileDropped = new EventEmitter<any>();

  classOriginal: string;
  @HostBinding('class') @Input() class: string ;

  ngOnInit() {
    this.classOriginal = this.class;
    this.class = `${this.classOriginal} ${this.fileUploadDragDropClassName}`;
  }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.class = `${this.classOriginal} ${this.fileUploadDragDropClassNameActive}`;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.class = `${this.classOriginal} ${this.fileUploadDragDropClassName}`;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.class = `${this.classOriginal} ${this.fileUploadDragDropClassName}`;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

}
