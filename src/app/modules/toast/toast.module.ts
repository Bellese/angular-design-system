import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './service/toast.service';
import { AlertModule } from '../alert/alert.module';
import { ToastComponent } from './component/toast.component';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  providers: [
    ToastService
  ],
  imports: [
    CommonModule,
    AlertModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    ToastComponent,
  ],
})
export class ToastModule { }
