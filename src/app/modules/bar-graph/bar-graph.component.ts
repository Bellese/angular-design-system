import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { AppTableModal } from '../table/table-modal/table-modal.component';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit, AfterViewInit {
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
  title: string;
  @Input()
  id = 0;
  @Input()
  colorScheme;
  @Input()
  showXAxis: boolean;
  @Input()
  showYAxis: boolean;
  @Input()
  showXAxisLabel: string;
  @Input()
  gradient = false;
  @Input()
  compareBars = false;
  @Input()
  tooltipDisabled = true;
  @Input()
  barPadding = '20';
  @Input()
  showYAxisLabel: string;
  @Input()
  animations = true;
  @Input()
  xAxisLabel: string;
  @Input()
  yAxisLabel: string;
  @Input()
  showGridLines: boolean;
  @Input()
  roundDomains: boolean;
  @Input()
  roundEdges: boolean;
  @Input()
  dataAutoId: string;

  ngOnInit() {
    if (this.compareBars) { this.handleColor(); }
    this.resize();
  }

  ngAfterViewInit() {
    this.handleAria();
    this.setPosition();
  }

  resize() {
    const graphContainer = document.getElementsByClassName('mainGraphClass')[0]
      .clientWidth;
    this.view = [graphContainer, graphContainer / 2];
    this.setPosition();
  }

  handleColor() {
    if (this.data[0].value < this.data[1].value) {
      this.customColors = [
        {
          name: `${this.data[0].name}`,
          value: '#950000'
        }
      ];
    }
  }

  handleAria() {
    this.bars = document.querySelectorAll('#barGraph_' + this.id + ' .bar');
    this.chart = document.querySelectorAll(
      '#barGraph_' + this.id + ' .ngx-charts'
    );

    this.chart[0].setAttribute('aria-hidden', true);
    // for IE/Edge
    this.chart[0].setAttribute('focusable', false);

    // tabindex of -1 on the bars to avoid focus inside the graph on tab
    for (let i = 0; i < this.bars.length; i++) {
      const parent = this.bars[i].parentNode;
      parent.setAttribute('tabindex', -1);
      parent.setAttribute('focusable', false);
    }
  }

  setPosition() {
    if (this.showXAxis) {
      setTimeout(() => {
        const tickTransform = document.querySelectorAll('.x.axis .tick');

        const container = document
          .getElementById('valueContainer')
          .getBoundingClientRect().left;

        Array.from(tickTransform).forEach((x, i) => {
          const tick = x.getBoundingClientRect();
          const left = tick.left - container;
          const width = tick.width;

          const target = document.getElementById('value_' + i + this.id);

          target.style.left = left + 'px';
          target.style.width = width + 'px';
          target.style.display = 'inline';
        });
      }, 225);
    }
  }

}
