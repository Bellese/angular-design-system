import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';
import { BarGraphDataModel, BarGraphModel } from './bar-graph.model';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit, AfterViewInit {
  customColors;
  comp = AppTableModalComponent;
  view: any[];

  isGroupDisplayed = false;

  @Input() barGraphModel: BarGraphModel;

  @ViewChild('barChart', { static: true }) barChartContainer;

  ngOnInit() {
    if (!this.barGraphModel) {
      this.barGraphModel = new BarGraphModel();
    }

    // Bar Graphs with groups have to use a different ngx-charts component than normal bar graphs
    // We can assume that if the first element of the array has a series property, then we are dealing
    // with a grouped chart.
    if (this.barGraphModel.data[0].hasOwnProperty('series')) {
      this.isGroupDisplayed = true;
    }

    if (this.barGraphModel.compareBars) {
      this.handleColor();
    }

    this.resize();
  }

  ngAfterViewInit() {
    console.log(this.barChartContainer);
  }

  resize() {
    const graphContainer = document.getElementsByClassName('mainGraphClass')[0].clientWidth;
    this.view = [graphContainer, graphContainer / 2];
  }

  handleColor() {
    // Only run this function if the bar graph has a single set of data and is not grouped
    if (!this.isGroupDisplayed) {
      const barGraphData = <BarGraphDataModel[]>this.barGraphModel.data;
      if (barGraphData[0].value < barGraphData[1].value) {
        this.customColors = [
          {
            name: `${barGraphData[0].name}`,
            value: '#950000',
          },
        ];
      }
    }
  }
}
