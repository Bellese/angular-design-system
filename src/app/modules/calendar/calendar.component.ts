import { Component, Input, Output, EventEmitter } from "@angular/core";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import moment, { Moment } from "moment";

// Models
import { CalendarModel } from "./calendar.model";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
  @Input() calendarModel: CalendarModel;
  @Output() selectedDates = new EventEmitter<any>();

  showEndDate: boolean = true;
  errorMessage: string;

  faCalendarAlt = faCalendarAlt;

  constructor() {}

  validateDate(event) {
    let date: Moment = moment(event.value);
    let isEndDate: boolean = event && event.targetElement.name === "endDate";

    this.errorMessage = this.checkDate(date, isEndDate);

    if (!this.errorMessage) {
      isEndDate
        ? (this.calendarModel.endDate = event.value)
        : (this.calendarModel.date = event.value);
    }
    if (
      this.calendarModel.minDate &&
      moment(this.calendarModel.date).isBefore(this.calendarModel.minDate)
    ) {
      this.errorMessage = `Start date must be on or after ${moment(
        this.calendarModel.minDate
      ).format("MM-DD-YYYY")}`;
    }
    if (
      this.calendarModel.maxDate &&
      moment(this.calendarModel.date).isAfter(this.calendarModel.maxDate)
    ) {
      this.errorMessage = `Start date must be on or before ${moment(
        this.calendarModel.maxDate
      ).format("MM-DD-YYYY")}`;
    }
    if (
      this.calendarModel.minEndDate &&
      moment(this.calendarModel.endDate).isBefore(this.calendarModel.minEndDate)
    ) {
      this.errorMessage = `End date must be on or after ${moment(
        this.calendarModel.minEndDate
      ).format("MM-DD-YYYY")}`;
    }
    if (
      this.calendarModel.maxEndDate &&
      moment(this.calendarModel.endDate).isAfter(this.calendarModel.maxEndDate)
    ) {
      this.errorMessage = `End date must be on before ${moment(
        this.calendarModel.maxEndDate
      ).format("MM-DD-YYYY")}`;
    }
    if (
      this.calendarModel.date &&
      this.calendarModel.endDate &&
      this.showEndDate &&
      moment(this.calendarModel.date).isAfter(this.calendarModel.endDate)
    ) {
      this.errorMessage = "Start date is after end date";
    }

    if (!this.errorMessage)
      this.selectedDates.emit({
        dateId: `${this.calendarModel.id}Date`,
        endDateId: `${this.calendarModel.id}EndDate`,
        date: this.calendarModel.date,
        endDate: this.calendarModel.endDate
      });
  }

  checkDate(date: Moment, endDate: boolean) {
    if (!date.isValid()) {
      return !endDate
        ? "Date is not a valid date"
        : "End Date is not a valid date";
    }
    return null;
  }

  handleCheckbox(event) {
    this.showEndDate = !event.target.checked;
    this.validateDate(null);
  }
}
