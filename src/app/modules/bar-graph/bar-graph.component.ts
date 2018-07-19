import { Component, Input, OnChanges } from "@angular/core";
import { BaseChartComponent, ColorHelper } from "@swimlane/ngx-charts";
import * as d3 from "d3";

@Component({
  selector: "app-bar-graph",
  templateUrl: "./bar-graph.component.html",
  styleUrls: ["./bar-graph.component.css"]
})
export class BarGraphComponent extends BaseChartComponent implements OnChanges {
  dims: any;
  xScale: any;
  yScale: any;
  xDomain: any;
  yDomain: any;
  colors: ColorHelper;
  colorScheme: any = "cool";
  @Input() view;
  @Input() results;
  ngOnChanges() {
    this.update();
  }
  update() {
    super.update();
    this.dims = {
      width: this.width,
      height: this.height
    };
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
  }
  getXScale() {
    const spacing = 0.1;
    this.xDomain = this.getXDomain();
    return d3
      .scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.xDomain);
  }
  getYScale() {
    this.yDomain = this.getYDomain();
    return d3
      .scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.yDomain);
  }
  getXDomain() {
    return this.results.map(d => d.name);
  }
  getYDomain() {
    let values = this.results.map(d => d.value);
    let min = Math.min(0, ...values);
    let max = Math.max(...values);
    return [min, max];
  }
  setColors() {
    this.colors = new ColorHelper(this.colorScheme, "ordinal", this.xDomain);
  }
}
