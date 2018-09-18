import { Component, ViewChild, Input } from "@angular/core";
import { AppTableModal } from '../table-modal/table-modal.component'

@Component({
  selector: "app-bar-graph",
  templateUrl: "./bar-graph.component.html",
  styleUrls: ["./bar-graph.component.css"]
})
export class AppBarGraph {
  bars;
  chart;
  customColors;
  showModal = false;
  comp = AppTableModal;

  @Input()
  view: any[];
  @Input()
  data;
  @Input()
  title;
  @Input()
  id = 0;
  @Input()
  colorScheme;
  @Input()
  showXAxis;
  @Input()
  showYAxis;
  @Input()
  showXAxisLabel;
  @Input()
  gradient = false;
  @Input()
  compareBars = false;
  @Input()
  tooltipDisabled = true;
  @Input()
  barPadding = "20";
  @Input()
  showYAxisLabel;
  @Input()
  animations = true;
  @Input()
  xAxisLabel;
  @Input()
  yAxisLabel;
  @Input()
  showGridLines;
  @Input()
  roundDomains;
  @Input()
  roundEdges;
  @Input()
  footnoteData = []

  ngOnInit() {
    if (this.compareBars) this.handleColor();
    this.resize();
  }

  ngAfterViewInit() {
    this.handleAria();
    this.setPosition();
  }

  resize() {
    let graphContainer = document.getElementsByClassName("mainGraphClass")[0]
      .clientWidth;
    this.view = [graphContainer, graphContainer / 2];
    this.setPosition();
  }

  handleColor() {
    if (this.data[0].value < this.data[1].value) {
      this.customColors = [
        {
          name: `${this.data[0].name}`,
          value: "#950000"
        }
      ];
    }
  }

  handleAria() {
    this.bars = document.querySelectorAll("#barGraph_" + this.id + " .bar");
    this.chart = document.querySelectorAll(
      "#barGraph_" + this.id + " .ngx-charts"
    );

    this.chart[0].setAttribute("aria-hidden", true);
    //for IE/Edge
    this.chart[0].setAttribute("focusable", false);

    //tabindex of -1 on the bars to avoid focus inside the graph on tab
    for (let i = 0; i < this.bars.length; i++) {
      let parent = this.bars[i].parentNode;
      parent.setAttribute("tabindex", -1);
      parent.setAttribute("focusable", false);
    }
  }

  setPosition() {
    if (this.showXAxis) {
      setTimeout(() => {
        let tickTransform = document.querySelectorAll(".x.axis .tick");

        let container = document
          .getElementById("valueContainer")
          .getBoundingClientRect().left;

        Array.from(tickTransform).forEach((x, i) => {
          let tick = x.getBoundingClientRect();
          let left = tick.left - container;
          let width = tick.width;

          let target = document.getElementById("value_" + i + this.id);

          target.style.left = left + "px";
          target.style.width = width + "px";
          target.style.display = "inline";
        });
      }, 225);
    }
  }

}
