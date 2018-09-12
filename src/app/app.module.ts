import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { NgxChartsModule } from '@swimlane/ngx-charts'
import { NgxPaginationModule } from "ngx-pagination";

import { StarModule } from "./modules/star/star.module";
import { SpinnerModule } from "./modules/spinner/spinner.module";
import { TableModule } from "./modules/table/table.module";
import { TextFieldModule } from './modules/text-field/text-field.module';
import { ModalModule } from "./modules/modal/modal.module";
import { ModalShellModule } from "./modules/modal-shell/modal-shell.module";
import { ButtonModule } from "./modules/button/button.module";
import { DirectiveModule } from "./directives/directive.module";
import { PagingModule } from './modules/paging/paging.module';
import { BarGraphModule } from './modules/bar-graph/bar-graph.module';
import { PlusModule } from './modules/plus/plus.module';
import { CardModule } from './modules/card/card.module';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from './modules/date-picker/date-picker.module';
import { CircleGraphModule } from './modules/circle-graph/circle-graph.module';
import { CheckBoxModule } from './modules/check-box/check-box.module';
import { LineGraphModule } from './modules/line-graph/line-graph.module';
import { DropdownModule } from './modules/drop-down/drop-down.module';
import { AlertModule } from './modules/alert/alert.module';
import { AppService } from './services/app.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StarModule,
    SpinnerModule,
    TableModule,
    TextFieldModule,
    NgxPaginationModule,
    HttpClientModule,
    ModalModule,
    ButtonModule,
    DirectiveModule,
    PagingModule,
    FormsModule,
    NgxChartsModule,
    BarGraphModule,
    CardModule,
    PlusModule,
    DatePickerModule,
    CircleGraphModule,
    CheckBoxModule,
    LineGraphModule,
    DropdownModule,
    AlertModule,
    ModalShellModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
