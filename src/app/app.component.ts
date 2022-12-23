import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import modalData from '../assets/data/modalData.json';
import chartData from '../assets/data/chart-data.json';
import tableData from '../assets/data/table-data.json';
import tableHeaderData from '../assets/data/table-header-data.json';
import lineData from '../assets/data/line-data.json';
import dataSet from '../assets/data/publicReportingData.json';
import pieData from '../assets/data/pie-data.json';
import barData from '../assets/data/bar-data.json';
import cluster from '../assets/data/cluster-data.json';
import singleTableData from '../assets/data/single-table-data.json';
import dropDownData from '../assets/data/drop-down-data.json';
import { ModalService } from './services/modal/modal.service';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { AppTableModalComponent } from './modules/table/table-modal/table-modal.component';

import { FileUploadModel } from './modules/file-upload/file-upload.model';
import { CodeSnippetModel, CodeSnippetContentItemModel } from './modules/code-snippet/code-snippet.model';
import { FileUploadComponent } from './modules/file-upload/file-upload.component';
import { ToastService } from './modules/toast/service/toast.service';
import {
  TableModel,
  TableHeaderModel,
  TableCellTypeEnum,
  TableHeaderTypeEnum,
  TableRowModel,
  TableCellModel,
  TablePaginationModel,
} from './modules/table2/table.models';
import { faUser, faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  PopoverModel,
  PopoverItemModel,
  mdePopoverPositionXEnum,
  mdePopoverPositionYEnum,
} from './modules/popover/popover.model';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { TableComponent } from './modules/table2/table.component';
import { TooltipPlacementEnum, TooltipTriggerTypeEnum } from './modules/tooltip/tooltip.models';
import { PillboxContent, PillboxFraction } from './modules/pillbox/pillbox.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService],
})
export class AppComponent implements OnInit {
  modalData;
  chartData;
  tableData;
  tableHeaderData;
  lineData;
  dataSet;
  pieData;
  barData;
  cluster;
  searchText;
  openAll;
  singleTableData;
  totalRows = 0;
  resetSearch: boolean;
  searchValue: string;
  dropDown = [
    {
      content: 'option1',
      value: 'op1',
    },
    {
      content: 'option2',
      value: 'op2',
    },
    {
      content: 'option3',
      value: 'op3',
    },
  ];
  alertMessageList = ['Alert message 1', 'Alert message 2'];

  tabs = [
    {
      title: 'tab1',
      id: 'tab1',
      ariaLabel: 'tab1 hello',
      description: 'Files acceptable are whatever you want to upload.',
    },
    {
      title: 'tab2',
      ariaLabel: 'tab1 yellow',
      description: 'Files acceptable are TXT, TSV, CSV.',
    },
    {
      title: 'tab3',
      id: 'tab3',
      ariaLabel: 'tab3 mellow',
      description: 'Files acceptable are cat and dog pictures.',
      disabled: true,
    },
  ];

  codeSnippetModel = new CodeSnippetModel({
    label: 'XPath',
    copyLinkLabel: 'Copy!!',
    contentItems: [
      new CodeSnippetContentItemModel({ content: 'line1' }),
      new CodeSnippetContentItemModel({ content: '  - line 2' }),
      new CodeSnippetContentItemModel({
        content: '     - line 3',
        className: 'ds-u-fill--error-lightest ds-u-color--error-dark',
        lineNumber: 150,
      }),
      new CodeSnippetContentItemModel({
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      }),
    ],
    // copyContent: 'copy override',
  });

  tabTitle: string = 'not clicked';
  tabDesc: string = '';

  fileUploadModel = new FileUploadModel({
    label: 'Drag and Drop',
    ariaLabel: 'Drag and Drop',
    id: 'drag_drop',
    dataAutoId: 'drag-drop-auto',
    height: 250,
  });

  appTableModalComponent = AppTableModalComponent;

  @ViewChild('uploader') uploader: FileUploadComponent;

  pillboxData = {
    simplest: {
      first: <PillboxContent[]>[{
        label: 'Single label, no styling or whatever'
      }]
    },
    simplestCenterdBold: {
      first: <PillboxContent[]>[{
        label: 'Single label, style override and bold',
        classes: 'ds-u-font-size--base ds-u-leading--base ds-u-text-align--center',
        bold: true,
      }]
    },
    twoLabels: {
      first: <PillboxContent[]>[{
        label: 'First label',
      }],
      second: <PillboxContent[]>[{
        label: 'Second label',
      }],
    },
    labelPairs: {
      first: <PillboxContent[]>[
        {
          label: 'First high',
        },
        {
          label: 'First low',
        },
      ],
      second: <PillboxContent[]>[
        {
          label: 'Second high',
        },
        {
          label: 'Second low',
        },
        {
          label: 'this gets trimmed, greedy dev!',
        },
      ],
    },
    fraction: {
      first: null,
      fraction: <PillboxFraction>{
        numerator: 95,
        denominator: 96,
        rate: 0.95,
        rateTooltip: 'Higher rates indicate better performance'
      },
    },
    fractionZeros: {
      first: null,
      fraction: <PillboxFraction>{
        numerator: 0,
        denominator: 0,
        rate: 0,
        rateTooltip: 'Lower rates indicate better performance'
      },
    }
  };

  popoverModel: PopoverModel = new PopoverModel({
    items: [
      new PopoverItemModel({
        label: 'Menu Item 1',
      }),
      new PopoverItemModel({
        label: 'Menu Item 2',
        url: 'https://www.google.com',
      }),
    ],
    showArrow: false,
    icon: faEllipsisV,
    label: null,
    mdePopoverPositionX: mdePopoverPositionXEnum.AFTER,
    mdePopoverPositionY: mdePopoverPositionYEnum.BELOW,
  });

  tableModel: TableModel = new TableModel({
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
        modalText: 'This is my modal.  Do you like it?',
      }),
      new TableHeaderModel({
        label: 'Date',
        columnKey: 'date',
        isRowHeader: true,
      }),
      new TableHeaderModel({
        label: 'User',
        columnKey: 'user',
        type: TableHeaderTypeEnum.SORT,
      }),
      new TableHeaderModel({
        label: 'Long Text Long Text',
        columnKey: 'longText',
        modalText: `
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Mauris ut semper diam. Ut ultrices ullamcorper neque</strong>,
            sed congue elit porttitor in. In at justo libero. Sed elementum bibendum ante id elementum. Aenean maximus ex at ornare tempor.
            Vivamus vitae consequat justo.
          </p>
          <p>
            Vivamus sed volutpat leo. Fusce placerat ante quis nulla tincidunt, quis viverra augue convallis.
            Vestibulum et pretium eros, vel posuere nibh. Morbi ultrices, justo eu iaculis bibendum, turpis magna blandit mi, et tincidunt
            nunc odio sed enim. Nulla eros mauris, facilisis sed fermentum id, dictum sollicitudin arcu. Donec id ligula interdum nisl
            dignissim congue sit amet a velit. Integer velit justo, mattis eget ante sed, aliquam bibendum magna. Suspendisse bibendum,
            enim quis pretium sollicitudin, odio felis posuere mi, id auctor ligula est sit amet magna.
          </p>
        `,
      }),
      new TableHeaderModel({
        label: 'Status',
        columnKey: 'status',
        type: TableHeaderTypeEnum.SORT,
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
            iconClass: 'ds-u-color--success',
          }),
          new TableCellModel({
            type: TableCellTypeEnum.POPOVER,
            popoverModel: this.popoverModel,
          }),
        ],
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
          }),
          new TableCellModel({
            label: '2/2/2002',
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
            iconClass: 'ds-u-color--error',
          }),
          new TableCellModel({
            type: TableCellTypeEnum.POPOVER,
            popoverModel: this.popoverModel,
          }),
        ],
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
          }),
          new TableCellModel({
            label: '2/1/2004',
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
            iconClass: 'ds-u-color--success',
          }),
          new TableCellModel({
            type: TableCellTypeEnum.POPOVER,
            popoverModel: this.popoverModel,
          }),
        ],
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
            class: 'ds-u-padding--0 ds-u-border--0 ds-u-color--base',
          }),
          new TableCellModel({
            label: '1/5/2010',
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
            iconClass: 'ds-u-color--gray',
          }),
          new TableCellModel({
            type: TableCellTypeEnum.POPOVER,
            popoverModel: this.popoverModel,
          }),
        ],
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
          }),
          new TableCellModel({
            label: '2/5/2010',
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
            iconClass: 'ds-u-color--gray',
          }),
          new TableCellModel({
            type: TableCellTypeEnum.POPOVER,
            popoverModel: this.popoverModel,
          }),
        ],
      }),
    ],
    totalRows: 20,
    summary: 'This table is an example implementation of the Table Component',
    pagination: new TablePaginationModel({
      isEnabled: true,
      perPage: 5,
      currentPage: 1,
    }),
  });

  TooltipTriggerTypeEnum = TooltipTriggerTypeEnum;
  TooltipPlacementEnum = TooltipPlacementEnum;

  @ViewChild('tableComponent') table2Component: TableComponent;

  constructor(private modalService: ModalService, private toastService: ToastService) {}

  buttonClick(e) {
    if (e.button) {
      console.log(e);
      this.modalService.appendComponentToBody(
        AppTableModalComponent,
        e.event.target.id,
        'Modal Example',
        e.button.array,
        'cancelButton1'
      );
    } else {
      console.log('Button pressed.');
    }
  }

  ngOnInit() {
    this.modalData = modalData;
    this.chartData = chartData;
    this.tableData = tableData;
    this.tableHeaderData = tableHeaderData;
    this.lineData = lineData;
    this.dataSet = dataSet;
    this.pieData = pieData;
    this.cluster = cluster;
    this.barData = barData;
    this.singleTableData = singleTableData;
    // console.log(this.tabTitle);
    this.modalService.modalDestroyed.subscribe({
      next: (id) => {
        console.log(`The #${id} modal has just closed`);
      },
    });
  }

  searchFunction(e) {
    if (e.target.value.trim() !== '') {
      this.openAll = true;
      this.searchText = e.target.value;
      this.totalRows = 0;
    } else {
      this.openAll = false;
      this.searchText = false;
      this.totalRows = 0;
    }
  }

  countTableRows(e) {
    this.totalRows += e;
  }

  announce(e) {
    console.log(e);
    this.searchValue = e;
  }

  clear() {
    this.resetSearch = true;
  }

  tabSelected(e) {
    this.tabTitle = e.target.innerText;
    this.tabDesc = this.tabs.filter((tab) => tab.title === e.target.innerText)[0].description;
  }

  uploadFile($event) {
    console.log($event);
    console.log(this.uploader.promptUpload());
  }

  showToast(message, title, variation) {
    this.toastService.showToast(message, title, variation);
  }
}
