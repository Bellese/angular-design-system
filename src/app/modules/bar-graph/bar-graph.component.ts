import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AppTableModalComponent } from '../table/table-modal/table-modal.component';
import {
  BarGraphDataModel,
  BarGraphGroupDataModel,
  BarGraphModel,
} from './bar-graph.model';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  customColors;
  comp = AppTableModalComponent;
  view: [number, number];

  isGroupDisplayed = false;
  isPagingDisplayed = false;
  isSmallScreen = false;
  barGraphData: BarGraphDataModel[];
  barGraphGroupData: BarGraphGroupDataModel[];
  isPrevPageEnabled = false;
  isNextPageEnabled = false;
  currentPage = 1;
  currentSet = 0;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  @Input() barGraphModel: BarGraphModel;

  @ViewChild('barChart', { static: true }) barChartContainer;

  ngOnInit(): void {
    if (!this.barGraphModel) {
      this.barGraphModel = new BarGraphModel();
    }

    if (this.barGraphModel.compareBars) {
      this.handleColor();
    }

    this.calculateSmallScreen();
    this.resize();

    if (this.barGraphModel.dataSets) {
      this.selectDataSet(0);
    }

    // Determine if the paging components should display with the chart
    // Because it creates a bad user experience if the component displays for one set and not for others,
    // we have to iterate through all series to see if any need paging
    // Combine datasets and data properties into one large array to avoid duplication of logic
    const combinedData = [...(this.barGraphModel.dataSets || []), { data: this.barGraphModel.data || [] }];
    for (const dataSet of combinedData) {
      if (this.barGraphModel.maxBarGroups && dataSet.data.length > this.barGraphModel.maxBarGroups) {
        this.isPagingDisplayed = true;
      }
    }

    this.setupBarGraphData();
  }

  setupBarGraphData(): void {
    this.currentPage = 1;
    this.refreshBarGraphData();
  }

  resize(): void {
    const graphContainer = document.getElementsByClassName('mainGraphClass')[0]?.clientWidth;
    this.view = [graphContainer, graphContainer / 2];
  }

  handleColor(): void {
    // Only run this function if the bar graph has a single set of data and is not grouped
    if (!this.isGroupDisplayed) {
      const barGraphData = this.barGraphData;
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

  refreshBarGraphData(): void {
    let sliceStart: number;
    let sliceEnd: number;
    if (this.barGraphModel.maxBarGroups) {
      sliceStart = this.barGraphModel.data.length - this.currentPage * this.barGraphModel.maxBarGroups;
      sliceEnd = sliceStart + this.barGraphModel.maxBarGroups;
      if (sliceStart <= 0) {
        sliceStart = 0;
      }
    } else {
      sliceStart = 0;
      sliceEnd = this.barGraphModel.data.length;
    }

    const data = this.barGraphModel.data.slice(sliceStart, sliceEnd);

    if (data.length < this.barGraphModel.data.length) {
      this.isPrevPageEnabled = true;
      this.isNextPageEnabled = true;
      if (sliceStart === 0) {
        this.isPrevPageEnabled = false;
      }
      if (sliceEnd === this.barGraphModel.data.length) {
        this.isNextPageEnabled = false;
      }
    } else {
      this.isPrevPageEnabled = false;
      this.isNextPageEnabled = false;
    }

    // Bar Graphs with groups have to use a different ngx-charts component than normal bar graphs
    // We can assume that if the first element of the array has a series property, then we are dealing
    // with a grouped chart.
    if (data[0]?.hasOwnProperty('series')){
      this.barGraphData = [];
      this.barGraphGroupData = data as BarGraphGroupDataModel[];
      this.isGroupDisplayed = true;
    } else {
      this.barGraphData = data as BarGraphDataModel[];
      this.barGraphGroupData = [];
      this.isGroupDisplayed = false;
    }
  }

  selectDataSet(index: number): void {
    this.currentSet = index;
    if (this.barGraphModel.dataSets?.length > index) {
      this.barGraphModel.data = this.barGraphModel.dataSets[index].data;
    }
    this.setupBarGraphData();
  }

  public get pagingLabel(): string {
    let labelStart: string;
    let labelEnd: string;
    let graphData;

    if (this.isGroupDisplayed) {
      graphData = this.barGraphGroupData;
    } else {
      graphData = this.barGraphData;
    }
    labelStart = graphData[0].name;
    labelEnd = graphData[graphData.length - 1].name;

    return `${labelStart} - ${labelEnd}`;
  }

  gotoPrevPage(): void {
    this.currentPage++;
    this.refreshBarGraphData();
  }

  gotoNextPage(): void {
    this.currentPage--;
    this.refreshBarGraphData();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.calculateSmallScreen();
  }

  calculateSmallScreen(): void {
    if (window.innerWidth < 768) {
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }
}
