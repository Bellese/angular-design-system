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

```
<app-table
[maxRows]="10"
[index]="1"
[tableTitle]="'Table Title'"
[headers]="headers"
[dataRows]="dataRows"
[paginate]="true"
[starRating]="3"
[tableSummary]="'A table summary for screen readers'">
</app-table>
```

### Required Data Structure for Table :

#### Table Headers :

The data provided to `headers` in the table component has to include `header` and `prop`. These two keys are used to label the table header and to put the data in the right place by the prop. `prop` has to match the same `prop` used for the data elements. _If it doesn’t match the data will not show up._

Include "sort" in the `el` property in order to enable sorting for that column. When enabled the header will render as a sortable header with the proper `aria-label` included and a sort indicator svg indicating ascending or descending data. If "sort" is not provided, you will just get a normal header.

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
- El - what helps the user choose between elements to include in the cell (ex: `link`, `date`, `checkbox`, `button`, and `default`)
- Attr - `attr` is the specific content needed to render the element. (ex: `info` and `footnote`)

```
//app.component.ts

dataRows = [
    {
        val1: {
            value: "100%",
            el: "default",
            attr: ""
        },
        val2: {
            value: "88%",
            el: "default",
            attr: ""
        },
        val3: {
            value: "1%",
            el: "default",
            attr: ""
        }
    },
    {
        val1: {
            value: "56%",
            el: "default",
            attr: ""
        },
        val2: {
            value: "34%",
            el: "default",
            attr: ""
        },
        val3: {
            value: "4%",
            el: "default",
            attr: ""
        }
    },
    {
        val1: {
            value: "44%",
            el: "default",
            attr: ""
        },
        val2: {
            value: "89%",
            el: "default",
            attr: ""
        },
        val3: {
            value: "12%",
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

### Using a Modal within the Data Table

In order to enable a modal(s) within the data table component, include a `modal` property within your `dataRows` data where needed. `el` property must have a value of `button`. `attr` property must have a value of `info` or `footnote`.

`modal` must be an array with two objects including properties `heading` and `paragraph`.

```
val1: {
    value: "12%",
    el: "button",
    attr: "info", <-- could also be "footnote"
    modal: [
        { heading: "Heading" },
        { paragraph: "Content of modal goes here"}
    ]
}
```

The modal is built the way it is because we have to come up with a way to destroy the modal after it has been enabled, if we dont we run into memory leak issues. This will cause the modal to take on values from a previous implementation. This will become a bigger issue if/when we start adding forms to modals.

## Modal and Accessibility

In order to get the modal to disable JAWS in the background you have to add `modal-aria-hidden` class on every level that is above the modal host, but does not contain the modal host. For example, do not add this class to the body, because modal host sits inside the body. But you can put this on page header because page header exist on the page but does not contain the modal within it

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
