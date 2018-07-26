import {
  Component,
  ComponentFactory,
  ViewChild,
  ComponentFactoryResolver,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { AppService } from "./app.service";
import { ModalDirective } from "./directives/modal-host";
import { AppModal } from "./modules/modal/modal/modal.component";
import * as cardData from "../assets/data/card-data.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService],
  entryComponents: [AppModal]
})
export class AppComponent implements OnInit {
  @ViewChild(ModalDirective) modalHost: ModalDirective;
  dataRows = [];
  p: number;
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isExpanded;

  accs = [
    {}, {}, {}, {}
  ]

  items: any;

  chartData = [
    {
      name: "Facility",
      value: -1.0
    },
    {
      name: "National",
      value: 2.2
    }
  ];

  colorScheme = {
    domain: ['#94BFA2', '#D6D7D9']
  }

  //footnote & info MUST have modal property
  data = [
    {
      row_Header: {
        value: "99%",
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
        value: "N/A",
        el: "button",
        attr: "footnote"
      },
      val3: {
        value: "100%",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "N/A",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "8 minutessssssssssssssssssssssssss",
        el: "button",
        attr: "footnote"
      },
      val3: {
        value: "4%",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "33%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "390 minutessssssssssssssssssss",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "222%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "11%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "40",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "1%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "2 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "44444%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "10 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22222%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    },
    {
      row_Header: {
        value: "22%",
        el: "button",
        attr: "info",
        modal: []
      },
      val2: {
        value: "900 minutes",
        el: "default",
        attr: "info",
        modal: []
      },
      val3: {
        value: "N/A",
        el: "default",
        attr: ""
      }
    }
  ];

  handleExpansion(e) {
    this.isExpanded = e;
  }

  headerData = [
    {
      header: { value: "State", prop: "row_Header", el: "default", abbr: "ST" }
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
    this.items = cardData;
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
