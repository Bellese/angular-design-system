export class CalendarModel {
    id: string = '';
    label: string = "Start Date";
    labelSecond: string = "End Date";
    isDateRange: boolean = true;
    isCheckBox: boolean = true;
    dataAutoId: string = "calendarPicker";
    date: Date;
    endDate: Date;

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        if (options) {
            for (const key of Object.keys(options)) {
                this[key] = options[key];
            }
        }
     }
}
