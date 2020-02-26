import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastComponent } from '../../modules/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastrService: ToastrService
  ) { }

  showToast(message: string, title: string, variation = 'info'): void {
    const toastRef = this.toastrService.success(
      message,
      title,
      {
        toastComponent: ToastComponent,
        toastClass: 'ngx-toastr ngx-toastr-no-padding'
      });

    toastRef.toastRef.componentInstance.variation = variation;
  }
}
