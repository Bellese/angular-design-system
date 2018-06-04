import {
  Component,
  ComponentFactory,
  ViewChild,
  ComponentFactoryResolver,
  AfterViewInit
} from "@angular/core";
import { AppService } from "./app.service";
import { ModalModule } from "./modules/modal/modal.module";
import { ModalDirective } from "./directives/modal-host";
import { AppModal } from "./modules/modal/modal/modal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService],
  entryComponents: [AppModal]
})
export class AppComponent {
  @ViewChild(ModalDirective) modalHost: ModalDirective;
  dataRows = [];

  //footnote & info MUST have modal property
  data = [
    {
      row_Header: {
        value: "ED-2b",
        el: "button",
        attr: "footnote",
        modal: [
          { heading: "Footnote(s)" },
          {
            paragraph:
              "(13) - Results cannot be calculated for this reporting period."
          },
          { heading: " Your Hospital ED Volume Category:" },
          { paragraph: "High" },
          { heading: "Your Hospital ED Volume Category Reference" },
          { paragraph: "Low: 302 Mins." },
          { paragraph: "Medium: 379 Mins." },
          { paragraph: "High: 376 Mins." },
          { paragraph: "Very High: 430 Mins." }
        ]
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
      row_Header: {
        value: "56%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "34%",
        el: "default",
        attr: "",
        modal: []
      },
      val3: {
        value: "4%",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "44%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "89%",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "12%",
        el: "default",
        attr: ""
      }
    }
  ];

  headerData = [
    {
      header: { value: "", prop: "row_Header", el: "sort", attr: "" }
    },
    {
      header: { value: "National", prop: "val2", el: "sort", attr: "" }
    },
    {
      header: { value: "Facility", prop: "val3", el: "sort", attr: "" }
    }
  ];

  constructor(
    private appService: AppService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getData().subscribe(data => {
      this.dataRows = data[0].measureSet[0].measureData;
    });
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
