import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../button/button.module";
import { AppModalShell } from "./modal-shell.component";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppModalShell],
  exports: [AppModalShell]
})
export class ModalShellModule {}
