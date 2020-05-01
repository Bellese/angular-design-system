import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './service/toast.service';
import { AlertModule } from '../alert/alert.module';
import { ToastComponent } from './component/toast.component';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    AlertModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    ToastComponent,
  ],
})

export class ToastModule {
  static forRoot(): ModuleWithProviders<ToastModule> {
      return {
          ngModule: ToastModule,
          providers: [ ToastService ]
      };
  }
}
