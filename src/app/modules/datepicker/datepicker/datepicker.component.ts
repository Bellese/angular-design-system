import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent implements OnInit {
  date = new Date();
  currentDay = this.date.getDate();
  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  valid = true;
  selectedInput: string;
  max: number;

  @Input() label;

  ngOnInit() {}

  validateDate(date) {
    let month = this.currentMonth;
    let day = this.currentDay;
    let year = this.currentYear;

    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //leap year check
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }

    if (month < 1 || month > 12) this.valid = false;
    if (day < 1 || day > 31) this.valid = false;

    this.max = monthLength[month - 1]

    this.valid = day > 0 && day <= monthLength[month - 1];
  }

  focus(e) {
    this.selectedInput = e.target.name;
  }
}
