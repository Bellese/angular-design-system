import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatepickerComponent } from './date-picker.component';

describe('DatepickerComponent', () => {
  let component: AppDatepickerComponent;
  let fixture: ComponentFixture<AppDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
