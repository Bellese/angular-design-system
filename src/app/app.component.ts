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

  constructor(
    private appService: AppService,
  ) {}
    
  buttonClick(e) {
    if(e.button) {
        alert('Button with no modal pressed');
    }
}

  ngOnInit() {
    this.dataSet = dataSet.default;
  }  
}
