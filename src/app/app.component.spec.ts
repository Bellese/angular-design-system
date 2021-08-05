import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  StarModule,
  SpinnerModule,
  TableModule,
  TextFieldModule,
  ModalModule,
  ButtonModule,
  DirectiveModule,
  PagingModule,
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
  TabsModule,
  FileUploadModule,
  CodeSnippetModule,
} from '../../public_api';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
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
          TabsModule,
          FileUploadModule,
          CodeSnippetModule,
        ],
        providers: [
          {
            provide: ToastrService,
            useValue: { success: () => of() },
          },
        ],
        declarations: [AppComponent, ExampleModalComponent],
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
