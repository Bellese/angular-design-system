import { Component, Input } from '@angular/core';

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Input() label: string;
  @Input() dataAutoId: string;

  startDate: Date;
  endDate: Date;

  faCalendarAlt = faCalendarAlt;

  constructor() { }

  input(date) {
    console.log(date)
    console.log(this.startDate);
    console.log(this.endDate)
  }


}
