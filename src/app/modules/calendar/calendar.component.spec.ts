import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CalendarComponent } from './calendar.component';
import { CalendarModel } from './calendar.model';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  const mockCalendarModel = new CalendarModel();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDatepickerModule, MatInputModule, MatNativeDateModule, FontAwesomeModule],
        declarations: [CalendarComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    component.calendarModel = mockCalendarModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
