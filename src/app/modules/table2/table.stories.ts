// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { Table2Module } from './table.module';

// Models
import { TableModel, TableHeaderModel, TableHeaderTypeEnum, TableRowModel, TableCellModel, TableCellTypeEnum, TablePaginationModel, TableHeaderSortEnum } from './table.models';
import { PopoverModel, PopoverItemModel, mdePopoverPositionXEnum, mdePopoverPositionYEnum } from '../popover/popover.model';

// Misc
import { faCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const popoverModel: PopoverModel = new PopoverModel({
  items: [
      new PopoverItemModel({
          label: 'Menu Item 1',
          onClick: defaultProps.handleEvent,
      }),
      new PopoverItemModel({
          label: 'Menu Item 2',
          url: 'https://www.google.com'
      }),
  ],
  showArrow: false,
  icon: faEllipsisV,
  label: null,
  mdePopoverPositionX: mdePopoverPositionXEnum.AFTER,
  mdePopoverPositionY: mdePopoverPositionYEnum.BELOW
});

const tableModel: TableModel = new TableModel({
  id: 'storiesTable',
  rowHeaderColumnKey: 'label',
  headers: [
    new TableHeaderModel({
      label: 'Select All',
      ariaLabel: 'Activate enter key to select all rows',
      type: TableCellTypeEnum.CHECKBOX,
      columnKey: 'checkbox',
    }),
    new TableHeaderModel({
      label: 'Label',
      columnKey: 'label',
    }),
    new TableHeaderModel({
      label: 'Date',
      columnKey: 'date',
      isRowHeader: true
    }),
    new TableHeaderModel({
      label: 'User',
      columnKey: 'user',
      type: TableHeaderTypeEnum.SORT
    }),
    new TableHeaderModel({
      label: 'Long Text Long Text',
      columnKey: 'longText',
    }),
    new TableHeaderModel({
      label: 'Status',
      columnKey: 'status',
      type: TableHeaderTypeEnum.SORT
    }),
    new TableHeaderModel({
      label: 'Action',
      columnKey: 'action',
    }),
  ],
  rows: [
    new TableRowModel({
      cells: [
        new TableCellModel({
          label: 'Row 1',
          ariaLabel: 'Activate spacebar to select row 1',
          checkboxValue: '1',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 1',
          type: TableCellTypeEnum.BUTTON,
          class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          buttonOnClick: ($event) => { console.log('Inline Function - ', $event); },
        }),
        new TableCellModel({
          label: '1/1/2000',
        }),
        new TableCellModel({
          label: 'Jim <span class="ds-c-badge ds-c-badge--alert">New</span>',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
        }),
        new TableCellModel({
          label: 'abcdefghijklmnopqrstuvwxyz1234567890',
        }),
        new TableCellModel({
          label: 'Active',
          icon: faCircle,
          iconClass: 'ds-u-color--success'
        }),
        new TableCellModel({
          type: TableCellTypeEnum.POPOVER,
          popoverModel: popoverModel
        })
      ]
    }),
    new TableRowModel({
      cells: [
        new TableCellModel({
          label: 'Row 2',
          ariaLabel: 'Activate spacebar to select row 2',
          checkboxValue: '2',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 2',
          type: TableCellTypeEnum.BUTTON,
          class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          buttonOnClick: defaultProps.handleEvent,
        }),
        new TableCellModel({
          label: '2/2/2002'
        }),
        new TableCellModel({
          label: 'Pam',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
        }),
        new TableCellModel({
          label: 'abcdefghijklmnopqrstuvwxyz1234567890',
        }),
        new TableCellModel({
          label: 'Suspended',
          icon: faCircle,
          iconClass: 'ds-u-color--error'
        }),
        new TableCellModel({
          type: TableCellTypeEnum.POPOVER,
          popoverModel: popoverModel
        })
      ]
    }),
    new TableRowModel({
      cells: [
        new TableCellModel({
          label: 'Row 3',
          ariaLabel: 'Activate spacebar to select row 3',
          checkboxValue: '3',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 3',
          type: TableCellTypeEnum.BUTTON,
          class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          buttonOnClick: defaultProps.handleEvent,
        }),
        new TableCellModel({
          label: '2/1/2004'
        }),
        new TableCellModel({
          label: 'Dwight',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
        }),
        new TableCellModel({
          label: 'abcdefghijklmnopqrstuvwxyz1234567890',
        }),
        new TableCellModel({
          label: 'Active',
          icon: faCircle,
          iconClass: 'ds-u-color--success'
        }),
        new TableCellModel({
          type: TableCellTypeEnum.POPOVER,
          popoverModel: popoverModel
        })
      ]
    }),
    new TableRowModel({
      cells: [
        new TableCellModel({
          label: 'Row 4',
          ariaLabel: 'Activate spacebar to select row 4',
          checkboxValue: '4',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 4',
          type: TableCellTypeEnum.BUTTON,
          // class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          buttonClass: "ds-c-button--primary",
          buttonOnClick: defaultProps.handleEvent,
        }),
        new TableCellModel({
          label: '1/5/2010'
        }),
        new TableCellModel({
          label: 'Jim',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
        }),
        new TableCellModel({
          label: 'abcdefghijklmnopqrstuvwxyz1234567890',
        }),
        new TableCellModel({
          label: 'Inactive',
          icon: faCircle,
          iconClass: 'ds-u-color--gray'
        }),
        new TableCellModel({
          type: TableCellTypeEnum.POPOVER,
          popoverModel: popoverModel
        })
      ]
    }),
    new TableRowModel({
      cells: [
        new TableCellModel({
          label: 'Row 5',
          ariaLabel: 'Activate spacebar to select row 5',
          checkboxValue: '5',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 5',
          type: TableCellTypeEnum.BUTTON,
          class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          buttonOnClick: defaultProps.handleEvent,
        }),
        new TableCellModel({
          label: '2/5/2010'
        }),
        new TableCellModel({
          label: 'Stanley',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
        }),
        new TableCellModel({
          label: 'abcdefghijklmnopqrstuvwxyz1234567890',
        }),
        new TableCellModel({
          label: 'Inactive',
          icon: faCircle,
          iconClass: 'ds-u-color--gray'
        }),
        new TableCellModel({
          type: TableCellTypeEnum.POPOVER,
          popoverModel: popoverModel
        })
      ]
    }),
  ],
  totalRows: 20,
  summary: 'This table is an example implementation of the Table Component',
  pagination: new TablePaginationModel({
    isEnabled: true,
    perPage: 5,
    currentPage: 1,
  })
});

const tableModelNoRecords = {
  ...tableModel,
  rows: [],
  totalRows: 0,
};

const tableModelLoading = {
  ...tableModel,
  isLoading: true,
};

const props = {
    ...defaultProps,
    tableModel,
    tableModelNoRecords,
    tableModelLoading,
};

storiesOf('Components|Table', module)
    .addDecorator(
        moduleMetadata({
            imports: [
              StoriesModule,
              Table2Module,
              BrowserAnimationsModule
            ],
        }),
    )
    .add('Intro', () => ({
      template: `
        <app-storybook-component-intro-component
            [imports]="imports"
            [parameters]="parameters"
            [notes]="notes"
        ></app-storybook-component-intro-component>
      `,
      props: {
          imports: [
              {
                  modules: ['TableModule2'],
                  file: '@bellese/angular-design-system',
                  ngmodule: 'imports',
              },
              {
                modules: ['BrowserAnimationsModule'],
                file: '@angular/platform-browser/animations',
                ngmodule: 'imports',
            },
          ],
          parameters: [
              {
                  name: 'tableModel',
                  type: 'TableModel',
                  value: 'An objects that defines how the table displays',
                  properties: [
                    {
                      name: 'id',
                      type: 'string',
                      value: 'A unique identifier for the table',
                    },
                    {
                      name: 'headers',
                      type: 'TableHeaderModel[]',
                      value: 'Use this to set the table headers.',
                      properties: [
                        {
                          name: 'columnKey',
                          type: 'string',
                          value: 'An identifier that should be shared between all cells and headers in one column.  This is very important for checkbox columns.  This doubles as a css class that you can use to style the header.',
                        },
                        {
                          name: 'label',
                          type: 'string',
                          value: 'The label that is shown inside of the header'
                        },
                        {
                          name: 'type',
                          type: 'TableHeaderTypeEnum',
                          options: TableHeaderTypeEnum,
                          default: 'TableHeaderTypeEnum.DEFAULT',
                          value: 'The type of header. Current supported options are sort, checkbox, or default'
                        },
                        {
                          name: 'isRowHeader',
                          type: 'boolean',
                          default: 'false',
                          value: 'Set this to true to change all corresponding table cells into row headers.  This is important for 508 compliance.'
                        },
                        {
                          name: 'sort',
                          type: 'TableHeaderSortEnum',
                          options: TableHeaderSortEnum,
                          default: 'TableHeaderSortEnum.NONE',
                          value: 'Specify if the column is sorted.  Current supported options are asc, desc, or none.'
                        },
                        {
                          name: 'isChecked',
                          type: 'boolean',
                          default: false,
                          value: 'Specify if a checkbox is checked.'
                        },
                      ]
                    },
                    {
                      name: 'rows',
                      type: 'TableRowModel[]',
                      value: 'Use this to set the table rows.',
                      properties: [
                        {
                          name: 'columnKey',
                          type: 'string',
                          value: 'An identifier that should be shared between all cells and headers in one column.  This is very important for checkbox columns.  This doubles as a css class that you can use to style the cell.',
                        },
                        {
                          name: 'label',
                          type: 'string',
                          value: 'The content that is shown inside of the cell'
                        },
                        {
                          name: 'ariaLabel',
                          type: 'string',
                          value: 'Screen reader text for the cell',

                        },
                        {
                          name: 'type',
                          type: 'TableCellTypeEnum',
                          value: 'The type of cell to show',
                          options: TableCellTypeEnum,
                          default: 'TableCellTypeEnum.DEFAULT'
                        },
                        {
                          name: 'class',
                          type: 'string',
                          value: 'A class for the table cell'
                        },
                        {
                          name: 'icon',
                          type: 'IconDefinition',
                          value: 'An icon to display in the cell before the label'
                        },
                        {
                          name: 'iconClass',
                          type: 'string',
                          value: 'A class for the icon'
                        },
                        {
                          name: 'buttonDisabled',
                          type: 'boolean',
                          value: 'For button cells only, use this field to disable the button',
                          default: false,
                        },
                        {
                          name: 'buttonOnClick',
                          value: 'For button cells only, a function that is called when the button is clicked',
                          type: 'function',
                        },
                        {
                          name: 'buttonClass',
                          value: 'A class for the button',
                          type: 'string',
                        },
                        {
                          name: 'checkboxValue',
                          value: 'For checkbox cells only, a value for the checkbox to emit',
                          type: 'string',
                        },
                        {
                          name: 'isChecked',
                          value: 'For checkbox cells only, use this to check or uncheck a checkbox',
                          type: 'boolean',
                        },
                        {
                          name: 'popoverModel',
                          value: 'For popover cells only, use this to configure the popover component. See the popover section for more info.',
                          type: 'PopoverModel',
                        },
                      ]
                    },
                    {
                      name: 'totalRows',
                      type: 'number',
                      value: 'The total number of rows that display in the table across all pages',
                      default: '10',
                    },
                    {
                      name: 'summary',
                      type: 'string',
                      value: 'the 508 summary to explain the purpose and describe the table. BE DETAILED',
                    },
                    {
                      name: 'class',
                      type: 'number',
                      value: 'A class for the table'
                    },
                    {
                      name: 'pagination',
                      type: 'TablePaginationModel',
                      value: 'Use this to set up the pageination component.',
                      properties: [
                        {
                          name: 'isEnabled',
                          type: 'boolean',
                          value: 'Show or hide the pagination component.',
                          deafult: 'true',
                        },
                        {
                          name: 'perPage',
                          type: 'number',
                          value: 'The amount of items to show on one page.',
                          default: '10',
                        },
                        {
                          name: 'currentPage',
                          type: 'number',
                          value: 'The current page that is being displayed',
                          default: '1',
                        },
                      ]
                    },
                    {
                      name: 'isLoading',
                      type: 'boolean',
                      value: 'Show or hide the loading spinner for the table',
                      default: 'false',
                    },
                    {
                      name: 'rowHeaderColumnKey',
                      value: 'The columnKey value of the column to use for the row header.  This is needed for 508 compliance.',
                      type: 'string',
                    },
                  ]
              },
          ],
          notes: [
            'This is v2 of the table component.  At the moment, the old component is still available for use, but it has been deprecated and all new pages should use this version.',
            'This component only supports server side paging and sorting, and no longer supports the client side implementation of either of those features.'
          ]
        }
      }))
      .add('Normal', () => ({
        template: `
            <app-table-2
                #tableComponent
                [tableModel]="tableModel"
                (paginationClick)="handleEvent($event)"
                (sortClick)="handleEvent($event)">
            </app-table-2>
            <div>
              {{ tableComponent.getSelectedCheckboxValues('checkbox').length }} items selected
            </div>
        `,
        props
    }))
    .add('No Records', () => ({
      template: `
          <app-table-2
              [tableModel]="tableModelNoRecords"
              (paginationClick)="handleEvent($event)"
              (sortClick)="handleEvent($event)">
          </app-table-2>
      `,
      props
    }))
    .add('Loading', () => ({
      template: `
          <app-table-2
              [tableModel]="tableModelLoading"
              (paginationClick)="handleEvent($event)"
              (sortClick)="handleEvent($event)">
          </app-table-2>
      `,
      props
    }));
