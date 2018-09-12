import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppModal } from'./modal.component';

import { ModalService } from'../../services/modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AppModal],
  providers: [ModalService],
  exports: [AppModal]
})
export class ModalModule {}
