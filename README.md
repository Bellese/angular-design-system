# HQRComponentLibrary

## Step 1 - Installation

Run `npm i hqr-component-library` to install

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
```

## Accordion Component Example

```
//app.component.html
<app-accordion-group>
    <app-accordion
    *ngFor="let item of items">
        <app-accordion-header>
            <h2>{{item.title}}</h2> // <-- header goes here
        </app-accordion-header>
        <app-accordion-content>
            <p>your content</p> // <-- content goes here
        </app-accordion-content>
    </app-accordion>
</app-accordion-group>
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

* `headers` : the column headers used in the table
* `dataRows` : the table data used in each column
* `tableSummary` : the 508 summary to explain the purpose and describe the table. _BE DETAILED_

### Optional :

* `searchable` : this input is `true` or `false` and will present a global table search
* `tableTitle`: this input will allow a caption to show up within the table itself giving the table a name
* `pagination`: this input will allow the option for pagination to work within the table, accepts `true` or `false`
* `starRating` : this input is set to `false`. Use this input to put a star rating on the table. All you need to pass is `starRating` with a number, the table will build the rest.

```
<app-table
[tableTitle]="'Table Title'"
[headers]="headers"
[dataRows]="dataRows"
[searchable]="true"
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

* Value - `value` is the actual value populated in the data cell
* El - what helps the user choose between elements to include in the cell (ex: `link`, `date`, `checkbox`, `button`, and `default`)
* Attr - `attr` is the specific content needed to render the element. (ex: `info` and `footnote`)

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