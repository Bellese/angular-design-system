import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppTicketComponent } from './ticket.component';

describe('AppTicketComponent', () => {
  let component: AppTicketComponent;
  let fixture: ComponentFixture<AppTicketComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
