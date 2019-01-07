import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppPanel } from "./panel.component";
import { Animations } from "../animations/animations";
import { PlusModule } from "../plus/plus.module";

import { DirectiveModule } from '../../directives/directive.module'

@NgModule({
  imports: [CommonModule, DirectiveModule, PlusModule],
  declarations: [AppPanel],
  exports: [AppPanel]
})
export class PanelModule {}