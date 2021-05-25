export enum BarGraphLegendLocationEnum {
  RIGHT = 'right',
  BELOW = 'below',
}

export class BarGraphModel {
  // ngx-charts Data
  data?: BarGraphDataModel[] | BarGraphGroupDataModel[];
  dataSets?: BarGraphDataSetModel[];

  // ngx-charts Display
  colorScheme: any = {
    domain: ['#6DB6FF', '#DB6D00', '#009292', '#666666'],
  };
  showXAxis = true;
  showYAxis = true;
  xAxisLabel: string;
  yAxisLabel: string;
  gradient = false;
  compareBars = false;
  tooltipDisabled = false;
  barPadding = 2;
  groupPadding = 10;
  animations = true;
  showGridLines = true;
  roundDomains = true;
  roundEdges = true;
  legend = false;
  legendLocation = BarGraphLegendLocationEnum.RIGHT;
  legendLocationSmall = BarGraphLegendLocationEnum.BELOW;

  // Additional Configurations
  title: string;
  maxBarGroups: number = 0;

  // Misc.
  dataAutoId: string;
  id = 0;

  constructor(options?) {
    // Set the values in this object based on the defaults and parameters that are passed in
    if (options) {
      for (const key of Object.keys(options)) {
        this[key] = options[key];
      }
    }
  }
}

export class BarGraphDataModel {
  name: string;
  value: number;
  modal?: any;
  modalTitle?: string;
}

export class BarGraphGroupDataModel {
  name: string;
  series: {
    name: string;
    value: number;
    extra?: any;
  }[];
}

export class BarGraphDataSetModel {
  name: string;
  data: BarGraphDataModel[] | BarGraphGroupDataModel[];
}
