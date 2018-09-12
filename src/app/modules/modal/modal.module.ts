import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalService } from'../../services/modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  entryComponents: [],
  providers: [
    ModalService
  ],
})
export class ModalModule {}
