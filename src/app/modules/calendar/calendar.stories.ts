// Storybook
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { StoriesModule } from "../../../stories/stories.module";
import { defaultProps } from "../../../../.storybook/helpers";

// Modules
import { CalendarModule } from "./calendar.module";

// Models
import { CalendarModel } from "./calendar.model";

const calendarModel = new CalendarModel({
  id: "calendar",
  date: new Date("10/10/2018"),
  endDate: new Date("10/12/2019")
});
const calendarNoBox = new CalendarModel({
  id: "calendar",
  isCheckBox: false
});
const calendarModelNoRange = new CalendarModel({
  id: "calendar",
  label: "Pick your date",
  isDateRange: false
});

const props = {
  ...defaultProps,
  calendarModel,
  calendarNoBox,
  calendarModelNoRange
};

storiesOf("Components|Calendar", module)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule, CalendarModule]
    })
  )
  .add("Intro", () => ({
    template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
    props: {
      imports: [
        {
          modules: ["CalendarModule"],
          file: "@bellese/angular-design-system",
          ngmodule: "imports"
        }
      ],
      parameters: [
        {
          name: "calendarModel",
          type: "CalendarModel",
          value: "Use this to override the component's default settings.",
          properties: [
            {
              name: "id",
              type: "string",
              value: "Use this for ID"
            },
            {
              name: "dateLabel",
              type: "string",
              value: "Use this for label of first date"
            },
            {
              name: "endDateLabel",
              type: "string",
              value: "Use this for label of second date"
            },
            {
              name: "isDateRange",
              type: "boolean",
              value: "Use this to decide if second date is needed"
            },
            {
              name: "isCheckBox",
              type: "string",
              value: "Use this to decide if checkbox is needed"
            },
            {
              name: "date",
              type: "Date",
              value: "Use this for initial date"
            },
            {
              name: "endDate",
              type: "string",
              value: "Use this for initial endDate"
            },
            {
              name: "dataAutoId",
              type: "string",
              value: "Use this for testing ID"
            }
          ]
        }
      ]
    }
  }))
  .add("Normal", () => ({
    template: `
            <app-calendar 
                [calendarModel] = 'calendarModel'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props
  }))
  .add("No Checkbox", () => ({
    template: `
            <app-calendar 
                [calendarModel] = 'calendarNoBox'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props
  }))
  .add("No DateRange", () => ({
    template: `
            <app-calendar 
                [calendarModel] = 'calendarModelNoRange'
                (selectedDates) = 'handleEvent($event)'>
            </app-calendar>
        `,
    props
  }));
