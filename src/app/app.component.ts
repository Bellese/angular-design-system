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
import * as lineData from '../assets/data/line-data.json'
import { AppService } from'./services/app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
  entryComponents: [AppModal]
})
export class AppComponent implements OnInit {
  dataRows = [];
  p: number;
  list = [1, 2, 3];
  isExpanded;
  chartData = {};
  tableData = {};
  tableHeaderData = {};
  lineData = {};
  expand = false;
  items: any;

  colorScheme = {
    domain: ["#256D34", "#D6D7D9"]
  };

  accs = [
    { header: "Safety of Care" },
    { header: "Mortality" },
    { header: "Readmission" },
    { header: "Patient Experience" }
  ];

  handleExpansion(e) {
    this.isExpanded = e;
  }

  constructor(
    private appService: AppService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.items = cardData;
    this.chartData = chartData;
    this.tableData = tableData;
    this.tableHeaderData = tableHeaderData;
    this.lineData = lineData;
  }
}
