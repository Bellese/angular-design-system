import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AccordionModule } from "./modules/accordion/accordion.module";
import { StarModule } from "./modules/star/star.module";
import { DropdownModule } from "./modules/dropdown/dropdown.module";
import { SpinnerModule } from "./modules/spinner/spinner.module";
import { TableModule } from "./modules/table/table.module";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "./modules/modal/modal.module";
import { ButtonModule } from "./modules/button/button.module";
import { DirectiveModule } from "./directives/directive.module";
import { PagingModule } from './modules/paging/paging.module';
import { DatepickerModule } from './modules/datepicker/datepicker.module'
import { FormsModule } from '@angular/forms'

import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { CardComponent } from './modules/card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    StarModule,
    DropdownModule,
    SpinnerModule,
    TableModule,
    NgxPaginationModule,
    HttpClientModule,
    ModalModule,
    ButtonModule,
    DirectiveModule,
    PagingModule,
    DatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
