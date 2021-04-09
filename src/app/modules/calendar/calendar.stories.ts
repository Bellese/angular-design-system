import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { CalendarComponent } from './calendar.component';
import { CalendarModel } from './calendar.model';
import { CalendarModule } from './calendar.module';

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

export default {
  title: 'Components/Calendar',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, CalendarModule, BrowserModule, BrowserAnimationsModule],
    }),
  ],
  component: CalendarComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
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
});

export const Normal: Story<CalendarComponent> = () => ({
  template: `
      <app-calendar
          [calendarModel] = 'calendarModelNoRange'
          (selectedDates) = 'handleEvent($event)'>
      </app-calendar>
  `,
  props,
});

export const DateRange: Story<CalendarComponent> = () => ({
  template: `
    <app-calendar
        [calendarModel] = 'calendarNoBox'
        (selectedDates) = 'handleEvent($event)'>
    </app-calendar>
  `,
  props,
});

export const WithDebouncedInput: Story<CalendarComponent> = () => ({
  template: `
    <app-calendar
        [calendarModel] = 'calendarWithDebounce'
        (selectedDates) = 'handleEvent($event)'>
    </app-calendar>
  `,
  props,
});

export const DateRangeWithCheckbox: Story<CalendarComponent> = () => ({
  template: `
    <app-calendar
        [calendarModel] = 'calendarModel'
        (selectedDates) = 'handleEvent($event)'>
    </app-calendar>
  `,
  props,
});
