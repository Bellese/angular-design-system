import { Component, Input, OnInit, Output } from "@angular/core";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { EventEmitter } from "protractor";

// Models
import { CalendarModel } from "./calendar.model";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  @Input() calendarModel: CalendarModel;

  date: Date;
  endDate: Date;
  showEndDate: boolean = true;
  valid: boolean = true;
  selectedInput;
  errorMessage: string;

  faCalendarAlt = faCalendarAlt;

  constructor() {}

  ngOnInit() {
    if (this.calendarModel.date) this.date = this.calendarModel.date;
    if (this.calendarModel.endDate) this.endDate = this.calendarModel.endDate;
  }

  validateDate() {
    if (this.date === null) {
      this.valid = false;
      this.errorMessage = "Date is not a valid date";
    } else if (
      this.endDate === null &&
      this.showEndDate &&
      this.calendarModel.isDateRange
    ) {
      this.valid = false;
      this.errorMessage = "End date is not a valid date";
    } else {
      this.valid = true;
      this.errorMessage = "";
    }
  }

  handleCheckbox(event) {
    this.showEndDate = !event.target.checked;
    this.validateDate();
  }
}
