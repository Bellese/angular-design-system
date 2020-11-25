import { AngularDesignSystemModel } from '../../models/angular-design-system.models';
import { Moment } from 'moment';

export class CalendarModel extends AngularDesignSystemModel {
  id: string = '';
  dateLabel: string = 'Start Date';
  endDateLabel: string = 'End Date';
  isDateRange: boolean = false;
  isCheckBox: boolean = false;
  dataAutoId: string = 'calendarPicker';
  debounceTime?: number;
  date: Date;
  endDate: Date;
  ariaLabelDate: string = 'Date input';
  ariaLabelEndDate: string = 'End Date input';
  minDate: Date | undefined = undefined;
  maxDate: Date | undefined = undefined;
  minEndDate: Date | undefined = undefined;
  maxEndDate: Date | undefined = undefined;

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}
