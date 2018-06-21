import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppModal } from "./modal/modal.component";
import { AppModalBody } from "./modal-body/modal-body.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppModal, AppModalBody],
  exports: [AppModal, AppModalBody],
  entryComponents: [AppModal]
})
export class ModalModule {}
