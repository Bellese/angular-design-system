import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleModalComponent } from './example-modal.component';
import { ModalModule, ModalShellModule } from '../../../../public_api';

describe('ExampleModalComponent', () => {
  let component: ExampleModalComponent;
  let fixture: ComponentFixture<ExampleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ModalShellModule
      ],
      declarations: [ ExampleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
