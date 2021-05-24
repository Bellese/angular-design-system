import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';
import { BarGraphDataModel, BarGraphGroupDataModel, BarGraphModel } from './bar-graph.model';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  customColors;
  comp = AppTableModalComponent;
  view: any[];

  isGroupDisplayed = false;
  isSmallScreen = false;
  barGraphData: BarGraphDataModel[] | BarGraphGroupDataModel[];
  isPrevPageEnabled = false;
  isNextPageEnabled = false;
  currentPage = 1;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  @Input() barGraphModel: BarGraphModel;

  @ViewChild('barChart', { static: true }) barChartContainer;

  ngOnInit() {
    if (!this.barGraphModel) {
      this.barGraphModel = new BarGraphModel();
    }

    // Bar Graphs with groups have to use a different ngx-charts component than normal bar graphs
    // We can assume that if the first element of the array has a series property, then we are dealing
    // with a grouped chart.
    if (this.barGraphModel.data?.length && this.barGraphModel.data[0].hasOwnProperty('series')) {
      this.isGroupDisplayed = true;
    }

    if (this.barGraphModel.compareBars) {
      this.handleColor();
    }

    this.calculateSmallScreen();
    this.resize();

    this.barGraphData = this.barGraphModel.data;
    this.refreshBarGraphData();
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

  refreshBarGraphData() {
    let sliceStart = this.barGraphModel.data.length - this.currentPage * this.barGraphModel.maxBarGroups;
    const sliceEnd = sliceStart + this.barGraphModel.maxBarGroups;
    if (sliceStart <= 0) {
      sliceStart = 0;
    }
    console.log(sliceStart, sliceEnd);
    this.barGraphData = this.barGraphModel.data.slice(sliceStart, sliceEnd);
    if (this.barGraphData.length < this.barGraphModel.data.length) {
      this.isPrevPageEnabled = true;
      this.isNextPageEnabled = true;
      if (sliceStart === 0) {
        this.isPrevPageEnabled = false;
      }
      if (sliceEnd === this.barGraphModel.data.length) {
        this.isNextPageEnabled = false;
      }
    }
  }

  gotoPrevPage() {
    this.currentPage++;
    this.refreshBarGraphData();
  }

  gotoNextPage() {
    this.currentPage--;
    this.refreshBarGraphData();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateSmallScreen();
  }

  calculateSmallScreen() {
    if (window.innerWidth < 768) {
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }
}
