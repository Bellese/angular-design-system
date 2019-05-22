import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModalComponent } from './modal.component';

import { ModalService } from '../../services/modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AppModalComponent],
  exports: [AppModalComponent]
})
export class ModalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule,
            providers: [ ModalService ]
        }
    }
}
