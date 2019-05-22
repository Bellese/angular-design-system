import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})
export class AppDatepickerComponent {
    @Input() label: string;
    @Input() dataAutoId: string;

    date = new Date();
    currentDay = this.date.getDate();
    currentMonth = this.date.getMonth() + 1;
    currentYear = this.date.getFullYear();
    valid = true;
    selectedInput;
    max: number;
    errorMessage: string;

    validateDate(date) {
        const month = this.currentMonth;
        const day = this.currentDay;
        const year = this.currentYear;
        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // leap year check
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
          monthLength[1] = 29;
        }
        this.max = monthLength[month - 1]

        if (month > 1 && month < 12) {
            if (day < 0 || day > monthLength[month - 1]) {
                // day is invalid
                this.valid = false;
                this.errorMessage = 'Day does not exist in this month';
                this.selectedInput = 'day';
                document.getElementById(this.selectedInput).focus();
            } else {
                this.valid = true;
                this.errorMessage = '';
            }
        } else if (month < 1 || month > 12){
            // month is invalid
            this.valid = false;
            this.errorMessage = 'Month entered does not exist';
            this.selectedInput = 'month';
            document.getElementById(this.selectedInput).focus();
        } else {
            this.valid = true;
            this.errorMessage = '';
        }
    }
}