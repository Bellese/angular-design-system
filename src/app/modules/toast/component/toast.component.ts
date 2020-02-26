import { Component, Input } from '@angular/core';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import { Animations } from './toast.animations';

  @Component({
    // tslint:disable-next-line: component-selector - animations do not work if the selector is not used in this way
    selector: '[app-toast]',
    styleUrls: ['./toast.component.css'],
    templateUrl: './toast.component.html',
    animations: [
      Animations.animations
    ]
  })
  export class ToastComponent extends Toast {
    @Input() variation: string;

    constructor(
      protected toastrService: ToastrService,
      public toastPackage: ToastPackage,
    ) {
      super(toastrService, toastPackage);
    }
  }