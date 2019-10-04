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
