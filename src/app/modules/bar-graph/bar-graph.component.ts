import {
  Component,
  AfterViewInit,
  ViewChild,
  Input,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-bar-graph",
  templateUrl: "./bar-graph.component.html",
  styleUrls: ["./bar-graph.component.css"]
})
export class BarGraphComponent implements AfterViewInit {
  single: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = "Group Score";
  childrenArr: any[];
  @Input() view: any[];
  @Input() data;
  @Input() colorScheme;

  @ViewChild("target", { read: ElementRef })
  target: ElementRef;

  ngAfterViewInit() {
    let el = this.target.nativeElement;
  }

  resize() {
    let graphContainer = document.getElementsByClassName("mainGraphClass")[0]
      .clientWidth;
    this.view = [graphContainer, graphContainer / 2];

    let graphLabel = document.getElementsByClassName("textDataLabel");
    const myAttributes = [{ attr: "x", value: "0" }, { attr: "y", value: "0" }];
  }

  onSelect(event) {
    console.log(event);
  }

  axisFormat = val => {
    let result;
    for (let x of this.data) {
      if (x.name === val) {
        result = val + ` [${x.value}]`;
      }
    }
    return result;
  };
}
