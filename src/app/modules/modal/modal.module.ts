import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppModal } from'./modal.component';

import { ModalService } from'../../services/modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AppModal],
  exports: [AppModal]
})
export class ModalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule,
            providers: [ ModalService ]
        }
    }
}
