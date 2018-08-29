import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatepicker } from './date-picker.component';

describe('DatepickerComponent', () => {
  let component: AppDatepicker;
  let fixture: ComponentFixture<AppDatepicker>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDatepicker ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
