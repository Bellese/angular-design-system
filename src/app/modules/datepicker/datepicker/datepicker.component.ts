import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent {


  date = new Date();
  currentDay = this.date.getDate();
  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  invalid = false;
  endOfMonth: number;
  selectedInput: string;

  @Input() label;

  validateDate(f) {
    let date = moment(
      this.currentMonth + "-" + this.currentDay + "-" + this.currentYear,
      "M-D-YYYY",
      true
    );
    let end = date.daysInMonth();
    this.endOfMonth = end;

    !date.isValid() ? (this.invalid = true) : (this.invalid = false);

  }

  focus(e) {
    this.selectedInput = e.target.name;
  }
}
