import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent implements OnInit {
  myform: FormGroup;

  date = new Date();
  currentDay = this.date.getDate();
  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  invalid = false;
  endOfMonth: number;

  @Input() label;

  ngOnInit() {
    this.myform = new FormGroup({
      month: new FormControl("", Validators.required),
      day: new FormControl("", Validators.required),
      year: new FormControl("", Validators.required)
    });
  }

  validateDate() {
    let date = moment(
      this.currentYear + "-" + this.currentMonth + "-" + this.currentDay,
      "YYYY-M-D"
    );
    let end = date.daysInMonth();
    this.endOfMonth = end;

    !date.isValid() ? (this.invalid = true) : (this.invalid = false);
  }
}
