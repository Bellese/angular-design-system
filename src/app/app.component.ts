import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit
} from "@angular/core";
import { AppService } from "./app.service";
import { ModalDirective } from "./directives/modal-host";
import { AppModal } from "./modules/modal/modal/modal.component";
import * as cardData from "../assets/data/card-data.json";
import * as chartData from "../assets/data/chart-data.json";
import * as tableData from "../assets/data/table-data.json";
import * as tableHeaderData from "../assets/data/table-header-data.json";
import * as lineData from '../assets/data/line-data.json'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService],
  entryComponents: [AppModal]
})
export class AppComponent implements OnInit {
  @ViewChild(ModalDirective)
  modalHost: ModalDirective;
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

  closeModal(val, target) {
    document.getElementById(val).focus();
    //this.buttonFocus = val;
    target.destroy();
  }

  openModal(e) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AppModal
    );
    let viewContainerRef = this.modalHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);

    (<AppModal>componentRef.instance).closeModal.subscribe(x =>
      this.closeModal(x, componentRef)
    );

    //updates should occur below, above will always stay the same.
    (<AppModal>componentRef.instance).focusBack = e.e;
    (<AppModal>componentRef.instance).modalTitle = e.modalTitle;
    (<AppModal>componentRef.instance).modalData = e.data.modal;
    (<AppModal>componentRef.instance).modalClass = "ds-c-dialog--wide";
  }
}
