import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { AccordionModule } from './modules/accordion/accordion.module';
import { PanelModule } from './modules/panel/panel.module';
import { StarModule } from './modules/star/star.module';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { TableModule } from './modules/table/table.module';
import { Table2Module } from './modules/table2/table.module';
import { TextFieldModule } from './modules/text-field/text-field.module';
import { ModalModule } from './modules/modal/modal.module';
import { ModalShellModule } from './modules/modal-shell/modal-shell.module';
import { ButtonModule } from './modules/button/button.module';
import { DirectiveModule } from './directives/directive.module';
import { PagingModule } from './modules/paging/paging.module';
import { BarGraphModule } from './modules/bar-graph/bar-graph.module';
import { PlusModule } from './modules/plus/plus.module';
import { DatePickerModule } from './modules/date-picker/date-picker.module';
import { CircleGraphModule } from './modules/circle-graph/circle-graph.module';
import { ChoiceModule } from './modules/choice/choice.module';
import { LineGraphModule } from './modules/line-graph/line-graph.module';
import { DropdownModule } from './modules/drop-down/drop-down.module';
import { AlertModule } from './modules/alert/alert.module';
import { AppService } from './services/app.service';
import { FilterPipe } from './pipes/filter.pipe';
import { CardClusterModule } from './modules/card-cluster/card-cluster.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { SearchFieldModule } from './modules/search-field/search-field.module';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { AppTableModalComponent } from './modules/table/table-modal/table-modal.component';
import { DownloadQueModule } from './modules/download-que/download-que.module';
import { TabsModule } from './modules/tabs/tabs.module';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { CodeSnippetModule } from './modules/code-snippet/code-snippet.module';
import { PopoverModule } from './modules/popover/popover.module';
import { ToastModule } from './modules/toast/toast.module';
import { CalendarModule } from './modules/calendar/calendar.module';

@NgModule({
  declarations: [AppComponent, ExampleModalComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StarModule,
    SpinnerModule,
    TableModule,
    TextFieldModule,
    NgxPaginationModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ButtonModule,
    DirectiveModule,
    PagingModule,
    FormsModule,
    NgxChartsModule,
    BarGraphModule,
    PlusModule,
    DatePickerModule,
    CircleGraphModule,
    ChoiceModule,
    LineGraphModule,
    DropdownModule,
    AlertModule,
    ModalShellModule,
    AccordionModule,
    PanelModule,
    CardClusterModule,
    TicketModule,
    SearchFieldModule,
    DownloadQueModule,
    TabsModule,
    FileUploadModule,
    CodeSnippetModule,
    PopoverModule,
    ToastModule,
    Table2Module,
    CalendarModule,
  ],
  providers: [AppService, FilterPipe],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleModalComponent,
    AppTableModalComponent,
  ]
})
export class AppModule {}
