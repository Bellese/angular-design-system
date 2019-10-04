export class LineGraphModel {
    // ngx-charts Data
    data: LineGraphDataModel[];
    xAxisValues?: string[];

    // ngx-charts Display
    colorScheme: any = {
        domain: ['#6DB6FF', '#DB6D00', '#009292', '#666666']
    };
    animations = true;
    gradient = true;
    gridLines = true;
    autoScale = true;
    roundDomain = true;
    timeline = false;
    tooltipDisabled = false;
    xAxis = true;
    yAxis = true;
    xLabel?: string;
    yLabel?: string;
    xAxisTickFormatting?;
    yAxisTickFormatting?;

    // Misc.
    dataAutoId = 'line_graph';

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(options)) {
            this[key] = options[key];
        }
     }
}

export class LineGraphDataModel {
    name: string;
    series: LineGraphSeriesModel[];
}

export class LineGraphSeriesModel {
    name: string;
    value: string;
}