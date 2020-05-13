// Storybook
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { StoriesModule } from "../../../stories/stories.module";

// Modules
import { CalendarModule } from "./calendar.module";

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
          name: "dataAutoId",
          type: "string",
          value: "Use this for testing ID"
        }
      ]
    }
  }))
  .add("Normal", () => ({
    template: `
            <app-calendar 
                dataAutoId = 'testingID'>
            </app-calendar>
        `
  }));
