import { Component, OnInit, Input } from '@angular/core';

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() label: string;
  @Input() dataAutoId: string;

  faCalendarAlt = faCalendarAlt;

  constructor() { }

  ngOnInit() {
  }

}
