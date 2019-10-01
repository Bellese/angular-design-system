import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

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
import { ModalService } from './services/modal.service';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { AppTableModalComponent } from './modules/table/table-modal/table-modal.component';

import { FileUploadModel } from './modules/file-upload/file-upload.model';
import { CodeSnippetModel, CodeSnippetContentItemModel } from './modules/code-snippet/code-snippet.model.js';
import { FileUploadComponent } from './modules/file-upload/file-upload.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      ModalService
  ],
  entryComponents: [
      ExampleModalComponent
  ]
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
            value: 'op1'
        },
        {
            content: 'option2',
            value: 'op2'
        },
        {
            content: 'option3',
            value: 'op3'
        }
    ];

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
        }
    ];

    codeSnippetModel = new CodeSnippetModel({
        label: 'XPath',
        copyLinkLabel: 'Copy!!',
        contentItems: [
            new CodeSnippetContentItemModel({content: 'line1'}),
            new CodeSnippetContentItemModel({content: '  - line 2'}),
            new CodeSnippetContentItemModel({
                content: '     - line 3',
                className: 'ds-u-fill--error-lightest ds-u-color--error-dark',
                lineNumber: 150
            }),
            new CodeSnippetContentItemModel({content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}),
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

    constructor(private modalService: ModalService) {}

    buttonClick(e) {
        if (e.button) {
            console.log(e);
            this.modalService
            .appendComponentToBody(AppTableModalComponent, e.event.target.id, 'Modal Example', e.button.array, 'cancelButton1');
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
            }
        })
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
        this.tabDesc = this.tabs.filter((tab) => tab.title === e.target.innerText)[0].description
    }

    uploadFile($event) {
        console.log($event);
        console.log(this.uploader.promptUpload());
    }
}
