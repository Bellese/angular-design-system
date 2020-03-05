import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { Table2Module } from './table.module';

// import { AppTableHeaderComponent } from './table-header/table-header.component';
// import { AppTableRowComponent } from './table-row/table-row.component';
// import { AppTableDataComponent } from './table-data/table-data.component';

// import { AppPaginationComponent } from '../paging/paging.component';
// import { AppButtonComponent } from '../button/button.component';
// import { AppChoiceComponent } from '../choice/choice.component';
// import { ModalService } from '../../services/modal/modal.service';
// import { PipesModule } from '../../pipes/pipes.module';
// import { FilterPipe } from '../../pipes/filter.pipe';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { PagingModule } from '../paging/paging.module';
import { TableModel, TableHeaderModel, TableHeaderTypeEnum, TableRowModel, TableCellModel, TableCellTypeEnum, TablePaginationModel } from './table.models';
import { ButtonModule } from '../button/button.module';
import { ChoiceModule } from '../choice/choice.module';
import { PopoverModel, PopoverItemModel, mdePopoverPositionXEnum, mdePopoverPositionYEnum } from '../popover/popover.model';

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
    }),
    new TableHeaderModel({
      label: 'User',
      columnKey: 'user',
      type: TableHeaderTypeEnum.SORT
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
          value: '1',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 1',
          type: TableCellTypeEnum.BUTTON,
          onClick: defaultProps.handleEvent,
        }),
        new TableCellModel({
          label: '1/1/2000'
        }),
        new TableCellModel({
          label: 'Jim',
          icon: faUser,
          iconClass: 'ds-u-color--primary',
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
          value: '2',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 2',
          type: TableCellTypeEnum.BUTTON,
          onClick: defaultProps.handleEvent,
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
          value: '3',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 3',
          type: TableCellTypeEnum.BUTTON,
          onClick: defaultProps.handleEvent,
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
          value: '4',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 4',
          type: TableCellTypeEnum.BUTTON,
          onClick: defaultProps.handleEvent,
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
          value: '5',
          type: TableCellTypeEnum.CHECKBOX,
          columnKey: 'checkbox',
        }),
        new TableCellModel({
          label: 'Row 5',
          type: TableCellTypeEnum.BUTTON,
          onClick: defaultProps.handleEvent,
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

const props = {
    ...defaultProps,
    tableModel,
};

storiesOf('Components|Table', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
              ParametersComponent,
              ImportsComponent,
              NgModuleComponent,
              ComponentIntroComponent
            ],
            imports: [
              Table2Module,
              PagingModule,
              ButtonModule,
              ChoiceModule,
              FontAwesomeModule
            ],
            // providers: [FilterPipe, ModalService]
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
          ],
          parameters: [
              {
                  name: 'tableModel',
                  type: 'TableModel',
                  value: 'An objects that defines how the table displays',
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
                [tableModel]="tableModel"
                (paginationClick)="handleEvent($event)"
                (sortClick)="handleEvent($event)">
            </app-table-2>
        `,
        props
    }));
