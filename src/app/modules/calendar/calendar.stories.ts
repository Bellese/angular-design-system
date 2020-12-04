// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { CalendarModule } from './calendar.module';

// Models
import { CalendarModel } from './calendar.model';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const calendarModel = new CalendarModel({
  id: 'calendar',
  date: new Date('07/21/2020'),
  endDate: new Date('08/21/2020'),
  isCheckBox: true,
  isDateRange: true,
  minDate: new Date('07/21/2020'),
  maxDate: new Date('08/21/2020'),
  minEndDate: new Date('08/21/2020'),
  maxEndDate: new Date('09/21/2020'),
});
const calendarNoBox = new CalendarModel({
  id: 'calendar',
  isDateRange: true,
});
const calendarWithDebounce = new CalendarModel({
  ...calendarModel,
  debounceTime: 5000,
});

const calendarModelNoRange = new CalendarModel({
  id: 'calendar',
  dateLabel: 'Pick your date',
});

const props = {
  ...defaultProps,
  calendarModelNoRange,
  calendarNoBox,
  calendarModel,
  calendarWithDebounce,
};

storiesOf('Components/Calendar', module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, CalendarModule, BrowserModule, BrowserAnimationsModule],
    })
  )
  .add('Intro', () => ({
    template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
    props: {
      imports: [
        {
          modules: ['CalendarModule'],
          file: '@bellese/angular-design-system',
          ngmodule: 'imports',
        },
      ],
      parameters: [
        {
          name: 'calendarModel',
          type: 'CalendarModel',
          value: "Use this to override the component's default settings.",
          properties: [
            {
              name: 'id',
              type: 'string',
              value: 'Use this for ID',
            },
            {
              name: 'dateLabel',
              type: 'string',
              value: 'Use this for label of first date',
            },
            {
              name: 'endDateLabel',
              type: 'string',
              value: 'Use this for label of second date',
            },
            {
              name: 'isDateRange',
              type: 'boolean',
              value: 'Use this to decide if second date is needed',
            },
            {
              name: 'isCheckBox',
              type: 'string',
              value: 'Use this to decide if checkbox is needed',
            },
            {
              name: 'date',
              type: 'Date',
              value: 'Use this for initial date',
            },
            {
              name: 'endDate',
              type: 'string',
              value: 'Use this for initial endDate',
            },
            {
              name: 'dataAutoId',
              type: 'string',
              value: 'Use this for testing ID',
            },
            {
              name: 'ariaLabelDate',
              type: 'string',
              value: 'Use this to further specify button to the screen reader for date input',
            },
            {
              name: 'ariaLabelEndDate',
              type: 'string',
              value: 'Use this to further specify button to the screen reader for end date input',
            },
            {
              name: 'minDate',
              type: 'Date',
              value: 'Use this to set a minimum acceptable date',
            },
            {
              name: 'maxDate',
              type: 'Date',
              value: 'Use this to set a maximum acceptable date',
            },
            {
              name: 'minEndDate',
              type: 'Date',
              value: 'Use this to set a minimum acceptable date for the end date',
            },
            {
              name: 'maxEndDate',
              type: 'Date',
              value: 'Use this to set a maximum acceptable date for the end date',
            },
          ],
        },
      ],
    },
  }))
  .add('Normal', () => ({
    template: `
            <app-calendar
                [calendarModel] = 'calendarModelNoRange'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props,
  }))
  .add('Date Range', () => ({
    template: `
            <app-calendar
                [calendarModel] = 'calendarNoBox'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props,
  }))
  .add('With Debounced Input', () => ({
    template: `
            <app-calendar
                [calendarModel] = 'calendarWithDebounce'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props,
  }))
  .add('DateRange with Checkbox', () => ({
    template: `
            <app-calendar
                [calendarModel] = 'calendarModel'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props,
  }));
