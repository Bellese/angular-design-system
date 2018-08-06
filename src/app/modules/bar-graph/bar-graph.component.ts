import { Component, ViewChild, Input, ElementRef } from "@angular/core";

@Component({
  selector: "app-bar-graph",
  templateUrl: "./bar-graph.component.html",
  styleUrls: ["./bar-graph.component.css"]
})
export class BarGraphComponent {
  single: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = false;
  yAxisLabel = "Group Score";
  childrenArr: any[];
  bar;
  @Input() view: any[];
  @Input() data;
  colorScheme = { domain: ["#2E8540", "#D6D7D9"] };
  @Input() theme;
  @Input() title;
  @ViewChild("target", { read: ElementRef })
  target: ElementRef;
  customColors;

  ngOnInit() {
    if (this.data[0].value < this.data[1].value) {
      this.customColors = [
        {
          name: "Facility",
          value: "#D32121"
        }
      ];
    }
  }

  resize() {
    // this.bar = document
    //   .getElementsByClassName("bar")[0]
    //   .getBoundingClientRect().width;
    // let bars = document.getElementsByClassName("bars");
    let graphContainer = document.getElementsByClassName("mainGraphClass")[0]
      .clientWidth;

    // for (let x = 0; x < bars.length; x++) {
    //   bars[x].setAttribute("style", `width:${this.bar - 10}px`);
    // }

    this.view = [graphContainer, graphContainer / 2];
  }

  //for formatting xAxis labels
  axisFormat = val => {
    let result;
    for (let x of this.data) {
      if (x.name === val) {
        result = val + ` [${x.value}]`;
      }
    }
    return val;
  };
}
