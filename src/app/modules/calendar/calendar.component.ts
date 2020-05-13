import { Component, Input } from "@angular/core";

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
  @Input() dataAutoId: string;

  startDate: Date;
  endDate: Date;
  valid = true;
  selectedInput;
  errorMessage: string;

  faCalendarAlt = faCalendarAlt;

  constructor() {}

  validateDate(date) {
    console.log(this.startDate);
    console.log(this.endDate);
    if (this.startDate === null) {
      this.valid = false;
      this.errorMessage = "Start date is not a valid date";
    } else if (this.endDate === null) {
      this.valid = false;
      this.errorMessage = "End date is not a valid date";
    } else {
      this.valid = true;
      this.errorMessage = "";
    }
  }
}
