import { Component, Input, OnInit } from '@angular/core';
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';
import { BarGraphModel } from './bar-graph.model';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  bars;
  chart;
  customColors;
  showModal = false;
  comp = AppTableModalComponent;
  view: any[];

  @Input() barGraphModel: BarGraphModel;

  // @Input()
  // data;
  // @Input()
  // title: string;
  // @Input()
  // id = 0;
  // @Input()
  // colorScheme;
  // @Input()
  // showXAxis: boolean;
  // @Input()
  // showYAxis: boolean;
  // @Input()
  // showXAxisLabel: string;
  // @Input()
  // gradient = false;
  // @Input()
  // compareBars = false;
  // @Input()
  // tooltipDisabled = true;
  // @Input()
  // barPadding = '20';
  // @Input()
  // showYAxisLabel: string;
  // @Input()
  // animations = true;
  // @Input()
  // xAxisLabel: string;
  // @Input()
  // yAxisLabel: string;
  // @Input()
  // showGridLines: boolean;
  // @Input()
  // roundDomains: boolean;
  // @Input()
  // roundEdges: boolean;
  // @Input()
  // dataAutoId: string;

  ngOnInit() {
    if (this.barGraphModel.compareBars) { this.handleColor(); }
    this.resize();
  }

  resize() {
    const graphContainer = document.getElementsByClassName('mainGraphClass')[0]
      .clientWidth;
    this.view = [graphContainer, graphContainer / 2];
  }

  handleColor() {
    if (this.barGraphModel.data[0].value < this.barGraphModel.data[1].value) {
      this.customColors = [
        {
          name: `${this.barGraphModel.data[0].name}`,
          value: '#950000'
        }
      ];
    }
  }

}
