export class BarGraphModel {
    // ngx-charts Data
    data: BarGraphDataModel[];

    // ngx-charts Display
    title: string;
    colorScheme: any = {
        domain: ['#6DB6FF', '#DB6D00', '#009292', '#666666']
    };
    showXAxis = true;
    showYAxis = true;
    xAxisLabel: string;
    yAxisLabel: string;
    gradient = false;
    compareBars = false;
    tooltipDisabled = false;
    barPadding = '20';
    animations = true;
    showGridLines = true;
    roundDomains = true;
    roundEdges = true;

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
    value: string;
    modal?: any;
    modalTitle?: string;
}
