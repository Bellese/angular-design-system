import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export class CalendarModel extends AngularDesignSystemModel{
    id: string = '';
    dateLabel: string = "Start Date";
    endDateLabel: string = "End Date";
    isDateRange: boolean = false;
    isCheckBox: boolean = false;
    dataAutoId: string = "calendarPicker";
    date: Date;
    endDate: Date;
    ariaLabelDate: string = "Date input";
    ariaLabelEndDate: string = 'End Date input';

    constructor(options?) {
        super();
        this.setOptions(options);
    }
}
