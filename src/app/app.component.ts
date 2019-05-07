import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit
} from "@angular/core";

import { AppModal } from "./modules/modal/modal.component";
import * as cardData from "../assets/data/card-data.json";
import * as chartData from "../assets/data/chart-data.json";
import * as tableData from "../assets/data/table-data.json";
import * as tableHeaderData from "../assets/data/table-header-data.json";
import * as lineData from '../assets/data/line-data.json';
import * as dataSet from '../assets/data/publicReportingData.json';
import * as pieData from '../assets/data/pie-data.json';
import * as barData from '../assets/data/bar-data.json';
import * as cluster from '../assets/data/cluster-data.json';
import * as singleTableData from '../assets/data/single-table-data.json';
import { AppService } from './services/app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
  entryComponents: [AppModal]
})

export class AppComponent implements OnInit {
    dataSet;
    pieData;
    barData;
    cluster;
    searchText;
    openAll;
    singleTableData;
    totalRows = 0;
    searchValue: string;

    constructor(
    private appService: AppService,
    ) {}

    buttonClick(e) {
        if (e.button) {
            alert('Button with no modal pressed');
        } else {
            console.log('Button pressed.');
        }
    }

    ngOnInit() {
        this.dataSet = dataSet.default;
        this.pieData = pieData.default;
        this.cluster = cluster.default;
        this.barData = barData.default;
        this.singleTableData = singleTableData.default;
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
        //FIX THE RESET FUNCTION
        this.searchValue = ' ';
    }
}
