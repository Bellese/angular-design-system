import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeSnippetComponent } from './code-snippet.component';
import { ButtonModule } from '../../../../public_api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CodeSnippetComponent', () => {
  let component: CodeSnippetComponent;
  let fixture: ComponentFixture<CodeSnippetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule, FontAwesomeModule],
      declarations: [ CodeSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
