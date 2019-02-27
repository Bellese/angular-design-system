# Bellese Angular Design System

## Step 1 - Installation

Run `npm i @bellese/angular-design-system` to install

## Step 2 - Installing [CMS Design System](https://design.cms.gov/)

Run `npm i @cmsgov/design-system-core` and
`npm i @cmsgov/design-system-layout`

Once you have downloaded both packages, copy the design system's `fonts`, `images`, and `dist` directories (`dist` is located inside of the `design-system-core` `design-system-layout` directories) inside of `@cms/gov` in your application's `node_modules`.

Paste these directories into your Angular application's `assets` folder.

File structure:

```
├── assets/
    ├── css/
        ├── images/
        └── fonts/
        └── dist/
    ├── layout/
         └── dist/
```

Reference the styles in `.angular-cli.json`

```
      "styles": [
        "styles.css",
        "assets/css/dist/index.css",
        "assets/layout/dist/index.css"
      ],
```

## Importing Components

```
//app.module.ts
import { AccordionModule } from 'hqr-component-library'
import { StarModule } from 'hqr-component-library'
import { DropdownModule } from 'hqr-component-library'
import { SpinnerModule } from "./modules/spinner/spinner.module"
import { TableModule } from "./modules/table/table.module"
import { ModalModule } from "./modules/modal/modal.module"
import { ButtonModule } from "./modules/button/button.module"
import { DirectiveModule } from "./directives/directive.module" <-- DirectiveModule required for the Modal Component
import { PagingModule } from './modules/paging/paging.module'
```

## Star Rating Component Example

`starAmount` is the amount of stars you want displayed, this is defaulted to `5` so unless you need more than `5` you will not need to pass anything for this input. `rating` is the amount of stars that will be filled. For example, a starAmount of 5 with a rating of 2 is 2 out of 5 stars. `width` and `height` are defaulted to `30px`, but you can pass a custom width and height be sure to detail the value as px.

```
//app.component.html
<app-star-rating
[width]="'10px'"
[height]="'10px'"
[starAmount]="5"
[rating]="2">
</app-star-rating>
```

## Dropdown Component Example

`options` expects an array of options for the dropdown menu. `labelName` can be provided, but is not required.

```
//app.component.html
<app-dropdown
[id]="1"
[options]="options"
[labelName]="'name'">
</app-dropdown>
```

## Spinner Component Example

Spinner component sizes are `small` and `big`. Providing no size the spinner will appear as its default size. Colors include `success`, `primary`, and `muted`.

```
<app-spinner
[dataAutoId]="1"
[hide]="false"
[inversed]="false"
[filled]="false"
[color]="'muted'"
[size]="'big'">
</app-spinner>
```

## Data Table Component Example

The table is built with many features. Each table is built to call the needed components based on the data received. Every table requires 3 items to start:

- `headers` : the column headers used in the table
- `dataRows` : the table data used in each column
- `tableSummary` : the 508 summary to explain the purpose and describe the table. _BE DETAILED_

The table has been constructed to handle most cases for text overflow. We need to keep in mind that the column headers should utilize spaces or hyphens to wrap the text, the row headers should use the same format. The table data will turn into an ellipsis should the table shrink down and have text overflow. When buttons inside the data table shrink down the Asterix should still appear but there should be ellipsis where the words are. Keep in mind the Asterix is placed outside the button component so that it will always appear in a table.

### Optional :

- `tableTitle`: this input will allow a caption to show up within the table itself giving the table a name
- `pagination`: this input will allow the option for pagination to work within the table, accepts `true` or `false`
- `starRating` : this input is set to `false`. Use this input to put a star rating on the table. All you need to pass is `starRating` with a number, the table will build the rest.
- `index` : index assigned to table
- `maxRows`: For pagination - the maximum amount of rows on a page. Defaults to 9
- `searchText`: Used to return the exact row that matches a string passed to it. The search returns true if the word contains the string you pass
-`starRating`: This is specific to HQR, a way to show table ratings
-`linearScore`: A string to represent the linear score
-`reportingPeriod`: A string to represent the reporting period in the table header
-`highlightSearch`: A boolean to allow text to be highlighted as the searchtext is queried.
-`paginateNext`: This will return the next pagination page(ex: 1, 2, 3...)
-`total`: This is used in server side pagination, this will set the total number of rows count. Works with paginateNext.
-`tableRowsFiltered`: This will return the total amount of rows in the table

```
<app-table
[maxRows]="10"
[index]="1"
[tableTitle]="'Table Title'"
[headers]="headers"
[dataRows]="dataRows"
[paginate]="true"
[starRating]="3"
[highlightSearch]="true"
[tableSummary]="'A table summary for screen readers'">
</app-table>
```

### Required Data Structure for Table :

#### Table Headers :

The data provided to `headers` in the table component has to include `header` and `prop`. These two keys are used to label the table header and to put the data in the right place by the prop. `prop` has to match the same `prop` used for the data elements. _If it doesn’t match the data will not show up._

Include "sort" in the `el` property in order to enable sorting for that column. When enabled the header will render as a sortable header with the proper `aria-label` included and a sort indicator svg indicating ascending or descending data. If "sort" is not provided, you will just get a normal header.

If you want to sort a column on load use `el` sort with `attr` set to `asc` or `des`. This will set the direction you want to load the column data filtered as.

```
//app.component.ts
headers = [
    {
        header: {
            value: "Col 1",
            prop: "val1", <-- must match the property value in dataRows
            el: "sort"
        }
    },
    {
        header: {
            value: "Col 2",
            prop: "val2",
            el: "sort"
        }
    },
    {
        header: {
            value: "Col 3",
            prop: "val3",
            el: "sort"
        }
    }
];
```

#### Table Data :

Table data is where the JSON structure really comes into play. The data structure has to make sure that the key value pair is really the data prop followed by an object with three parameters:

- Value - `value` is the actual value populated in the data cell
- El - what helps the user choose between elements to include in the cell (ex: `link`, `checkbox`, `button` and `default`)
- Attr - `attr` is the class you want to pass to content to supplement the element. (ex: `success` and `failure`)
- href - this is used with el: link to set location of link
- instanceRef - this is a catch all key that is used with el: button. It passes any object back to the developer when a button is clicked. You can use this to open models, trigger alerts. All under the developers control or for their needs. 
- disabled - use this to add the disabled attr to the element. true or false.

```
//app.component.ts

dataRows = [
    {
        val1: {
            value: "100%",
            el: "button",
            attr: "",
            instanceRef: {
                key: value,
                key: value
            }
        },
        val2: {
            value: "88%",
            el: "link",
            attr: "",
            href: "./location"
        },
        val3: {
            value: "1%",
            el: "default",
            attr: ""
        }
    }
]
```

### Row Header

In order to have headers that are displayed vertically within the table, set `row_Header` as the property that defines each row.

```
row_Header: {
    value: "12%",
    el: "default"
}
```

## Modal Implementation

The modal is essentially the button component that renders a modal component. But we are extending the option to add dynamic custom components within the modal. once you render the app-modal component with the requirements below everything should connect for you.

*remember - when you import modalModule make sure you do it as modalModule.forRoot()

	Required:
`Modal Title` – Title of the Modal

`Modal Data` – The data to be sent to the modal body

`Content` – The name of the modal button

`Modal Component` – This will currently allow you to place a static component inside the modal, this component cannot receive data. When you use this you must import the component in the controller you are using to hold the modal component, then pass the export class name to the modal

	Optional:
`Modal Class` - This will change the width of the modal shell. This can be ds-c-dialog--narrow, ds-c-dialog--wide, ds-c-dialog--full    

`Modal ID` – The Id of the button that triggers the modal

`Button Class`—The style to apply to the modal button

`abbr`—In case you need to abbr the name of the button, mostly used inside the table

`firstfocus`—The first thing that should be focused on when modal opens, use when it should be something that is not the cancel button

## Build your own modal

Modal Shell:
Modal Shell is the easiest way to create your own unique modal. You’re going to need a few things to set this up. First make sure you followed the step above explaining how to modify app-root. Then we can start. You’re going to need to create a new component. Name it whatever you want. In the html you are going to start with <app-modal-shell>. Add the following inputs

`modalTitle` = title of modal

`modalCount` = allows for multiple modals

add an output for `(closeModal)` = This will track when the modal closes.

After you have this setup you have options to build the modal

`headerTemplate`: Modal header
`bodyTemplate`: Modal Body
`footerTemplate`: Modal Footer

These templates can be referenced through Angular's template syntax.
 
 ex: <ng-template #headerTemplate let-modalHeader="modalHeader">

In the TS file be sure to add inputs for modalTitle, modalData, and modalCount. And an output for closeModal;

Everything is handled automatically once you provide these input and outputs. Matter of fact the only one you are directly interacting with is modalData. And this is the data you need to make you modal body interactive. You should have a solid understand of how this works already. 

Once you bundle this up you are good to go. Make sure you add this component as an entry component inside your app.module.ts. 
Now you have created your own reusable modal.

Now when you are ready to add this to a page, just go to your new page controller and import the modal component you just built and pass that component as a variable to app-modal under modalComponent. Be sure to pass in modalTitle, ID and modalData. First focus is optional but it is neseccary if you want to focus on something in the modal other than the cancel button when the modal first opens. By 508 standards the first input should be focused on. 
From here you are all set. 

The modal is built the way it is because we have to come up with a way to destroy the modal after it has been enabled, if we dont we run into memory leak issues. This will cause the modal to take on values from a previous implementation. This will become a bigger issue if/when we start adding forms to modals.

## Pagination Component Example

The pagination component utilizes the [ngx-pagination](http://michaelbromley.github.io/ngx-pagination/#/) library. In order to paginate a list, a `paginate` pipe must be added to your list items. You can also configure `itemsPerPage` to display the amount of list items you'd like per page.

```
<ul>
    <li *ngFor="let item of list | paginate: { itemsPerPage: 3, currentPage: p}">
        {{item}}
    </li>
</ul>
<app-paging (currentPage)="p = $event"></app-paging>
```

## Bar Graph Component Example

The bar graph component utilizes the [ngx-charts](https://swimlane.github.io/ngx-charts) library.

* `xAxisLabel (string)` : Label for xAxis
* `yAxisLabel (string)` : Label for yAxis
* `showYAxisLabel (boolean)`: Will show/hide yAxis label 
* `showXAxisLabel (boolean)` : Will show/hide xAxix label
*  `showGridLines (boolean)` : Will show/hide graph grid lines 
* `colorScheme` : The color scheme of the chart. 
* `showXAxis (boolean)` : Will show/hide xAxis names and values 
* `showYAxis (boolean)` : Will show/hide yAxis values  
* `roundEdges (boolean)` : Will make the edges of bars round/square 
* `id (number)` : Unique id for using multiple charts on a single page 
* `title (string)` : Heading for bar chart
* `compareBars (boolean)` : For comparing two bars. When `true`, if the first bar value is less than the second bar, the bar will be red. 
* `animations (boolean)` : Enable/disable animations for graph
* `data`: The data for the bar graph  

### Data Formats:

Expected format for `data` :

```
[
  {
    "name": "Facility",
    "value": 2
  },
  {
    "name": "National",
    "value": 4
  }
]
```

Expected format for `colorScheme` :

```
  colorScheme = {
    domain: ["#256D34", "#D6D7D9"]
  }
```

```
<div class="ds-l-container">
        <app-bar-graph
        [xAxisLabel]="'X AXIS LABEL'"
        [yAxisLabel]="'Y AXIS LABEL'"
        [showXAxisLabel]="true"
        [showYAxisLabel]="true"
        [showGridLines]="true"
        [colorScheme]="colorScheme"
        [roundDomains]="true"
        [showXAxis]="true"
        [showYAxis]="true"
        [gradient]="false"
        [roundEdges]="false"
        [id]="1"
        [title]="'Group Score Comparison'"
        [compareBars]="true"
        [barPadding]="20"
        [animations]="true"
        [data]="chartData">
        </app-bar-graph>
</div>
```

## Checkbox Component Example

Required inputs:

- `index`: This will allow you find the unique checkbox within the whole group
- `value`: Value is what the checkbox represents when clicked, and is read by screen readers
- `groupName`: The name that each checkbox will fall under, to help you scope this group

Operating similarly to button, Checkbox is a reusable component, but there are currently limitations. Design.CMS.gov has a component for a checkbox. Styling looks great but you can’t capture the event and have it operate as expected with html, more details to come. Currently, no event emitted because we may need to scope this out with raw javascript and grab the set by the id and reference the checked prototype.

```
<app-check-box
[index]="1"
[value]="Checkbox_value"
[groupName]="Checkbox_groupName">
</app-check-box>
```

## Circle Graph Component Example

The circle graph component utilizes the [ngx-charts](https://swimlane.github.io/ngx-charts) library.

Since we currently see this graph only being used for the error summary page we built it specific to this use case. As such, some of the layout is presented to satisfy this requirement,but you should still be able to build a normal circle graph with no extra frills beyond what is given. The layout stays as is.

Since it is built for error summary we needed to capture the center text of the circle graph. In order to do this we are taking the total getting the percent of accepted out of this. The capture the accepted you must pass an extra key of “attr” in the object, this key must equal “rate” from here the application will grab the value of the object with attr = rate and divide it over the total. We went this route in case you want to get a different rate instead of accepted, now you can choose by giving the attr of rate.

Required:

- `data` – the data that’s passed to the graph

Optional:

- `scheme`: A color scheme for the graph to absorb
- `animations`: True or false, will the graph have animations or not
- `labels`: this will allow for labels to show along the graph, Boolean
- `trimLabels`: Boolean, this will cut the labels off if they’re too long and turn them into ellipses
  - `maxLabelLength`: This is required to be used along with `trimLabels` (determines how many characters you want each label to be)
- `explodeSlices` – This just makes the circle graph slices pop out, Boolean
- `doughnut` – Boolean, allows the graph to have a hole in the center
  - Required: `arcWidth`
- `arcWidth` – This is the thickness of the doughnut where 1 is full width and .1 is a tiny width
- `gradient` – Boolean, gradient or not
- `toolTipDisabled` – Boolean, removes the ability to mouseover the graph and show labels
- `title` – Text to go under the circle graph
- `tableSummary` – Attribute in table to describe what the table legend is about
- `legendTitle` – Title of the table legend
- `legendDate` – Date for the table legend
- `firstColumnName` – the first column is named total, but if you want to specify what total you can pass a string. Ex: total files

```
<app-circle-graph
[data]="chartData">
</app-circle-graph>
```

### Expected Data Format

```
chartData = [
  {
    "name": "Facility",
    "value": 458
  },
  {
    "name": "National",
    "value": 101
  }
]
```

## Line Graph Component Example

The line graph was built from utilizing the [ngx-charts](https://swimlane.github.io/ngx-charts)
library

Required:

- `data` – the data to render the graph
- `xLabel` – the x axis label
- `yLabel` – the y axis label

Optional:

- `colorScheme` – used to layout color scheme for lines
- `animations` – add animations or not
- `gridlines` – add gridlines or not
- `roundDomain` – round the y axis to the next level
- `xAxis` – show or hide x
- `yAxis` – show or hide y
- `showXLabel` – show or hide just the x label
- `showYLabel` – show or hide just the y label
- `xAxisTickFormatting` – format the string for x axis
- `yAxisTickFormatting` – format the string for y axis
- `toolTip` – add a tooltip on mouseover

```
<app-line-graph
[data]="lineGraphData"
[xLabel]="'X Axis Label'"
[yLabel]="'Y Axis Label'">
</app-line-graph>
```

### Expected Data Format

```
[
  {
    "name": "A",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },
  {
    "name": "B",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  }
]
```

### Card Component Example

Required:
* `data`: The data for the card component

```
<div class="ds-l-container">
    <app-card 
    [data]="cardData">
    </app-card>
</div>
```

## Expected data format

```
[
  {
    "title": "Card Title 1",
    "summary": "Summary of card 1",
    "svg_url": "assets/css/images/image.svg",
    "body": [
      {
        "title": "Row 1",
        "complete": "8/02/18",
        "by": "Name",
        "status": "Complete"
      },
      {
        "title": "Row 2",
        "complete": "8/02/18",
        "by": "Name",
        "status": "Complete"
      },
      {
        "title": "Row 3",
        "complete": "4/02/18",
        "by": "Name,
        "status": "Unavailable",
        "lastUpload": "04/02/18"
      },
      {
        "title": "Row 4",
        "complete": "4/15/18",
        "by": "Name",
        "status": "Unavailable",
        "lastUpload": "04/15/18"
      }
    ],
    "footer": [
      {
        "date": "4/15/18",
        "status": "In Progress"
      }
    ]
  },
  {
    "title": "Card Title 2",
    "summary": "Summary for card 2",
    "svg_url": "assets/css/images/image.svg",
    "body": [
      {
        "title": "Row 1",
        "complete": "8/02/18",
        "by": "Name",
        "status": "Complete"
      },
      {
        "title": "Row 2",
        "complete": "8/02/18",
        "by": "Name",
        "status": "Complete"
      },
      {
        "title": "Row 3",
        "complete": "4/02/18",
        "by": "Name",
        "status": "Unavailable",
        "lastUpload": "04/02/18"
      },
      {
        "title": "Row 4",
        "complete": "4/15/18",
        "by": "Name",
        "status": "Unavailable",
        "lastUpload": "04/15/18"
      }
    ],
    "footer": [
      {
        "date": "4/15/18",
        "status": "Unavailable"
      }
    ]
  }
]
```

### Alert Component Example

* `heading (string)` : Status heading of the alert
* `variation (string)` : Type of alert status, can be `error`, `warn`, or `success`
* `hideIcon (boolean)` :  Hide/show the alert status icon
* `hideClose (boolean)` : Hide/show the close button


```
<app-alert
[heading]="'Status heading'"
[variation]="'warn'"
[hideIcon]="false"
[hideClose]="false">
  Content of the alert <-- Alert content goes here
</app-alert>
```


### Accordion Component

When using accordion, use app-accordion to keep communicating with the other panels. For example if you open one panel the other will close. If you want the panels to open independent of each other dont wrap the panels in app-accordion.

There are no inputs.

```
<app-accordion>
    <app-panel></app-panel>
    <app-panel></app-panel>
    <app-panel></app-panel>
</app-accordion>
```

### Panel Component

* `title`: Use to name each accordion panel
* `extTitle`: Use to add supplimental information to each panel. Goes to the right of the main title and inline with it.
* `extTitleClass`: Use this to add different classes to change the look and feel of each ext title
* `expand`: Use this only to set a main panel to open on load. For example if I want the first panel to be set to open I will add expand=true to panel.
* `openAll`: Same concept as expand. Use this input on all panels to make each one open. Its optional: we use it when a search is open on the panels, we set openAll to true on each panel.


