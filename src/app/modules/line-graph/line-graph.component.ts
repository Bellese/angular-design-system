import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { LineGraphModel } from './line-graph.model';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})

export class AppLineGraphComponent implements OnInit, AfterViewInit {
    view: [number, number];
    filterValues: any[] = [];
    rangeFrom;
    rangeTo;

    @Input() lineGraphModel: LineGraphModel;

    @Output() LineClick = new EventEmitter<object>();

    current;
    shadowData;
    shadowDataCopy; // Used to reset the filter
    errorMessage: string;
    openInfoArea = false;
    focusDot = 0;
    flattenedDataArray = [];
    legendDataArray = [];
    rFI = null;
    rTI = null;
    updateWidthClass;
    changeLegend;
    alert;
    faInfoCircle = faInfoCircle;

    TIMELINE_PLACEHOLDER = 'TIMELINE_PLACEHOLDER';

    ngOnInit() {

        if (typeof SVGElement.prototype.contains === 'undefined') {
            SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
        }

        (function (window) {
            try {
                MouseEvent('test', false);
                return false; // No need to polyfill
            } catch (e) {
            // Need to polyfill - fall through
            }

            // Polyfills DOM4 MouseEvent

            var MouseEvent = function (eventType, params) {
                params = params || { bubbles: false, cancelable: false };

                const mouseEvent = document.createEvent('MouseEvent');

                mouseEvent
                .initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

                return mouseEvent;
            };

            MouseEvent.prototype = Event.prototype;

            (<any>window).MouseEvent = MouseEvent;
        })(window);

        this.resize();

        this.shadowData = [];

        // If xAxisValues is passed in, generate a new series and add it to the graph as the first line.
        if (this.lineGraphModel.xAxisValues) {

            // Find the smallest value from all other data series, and use that as the value for this new
            // series in order to not skew the chart
            let smallestValue;
            for (const series of this.lineGraphModel.data) {
                for (const seriesData of series.series) {
                    if (!this.lineGraphModel.xAxisValues.includes(seriesData.name)) {
                        console.warn(`The series ${series.name} has a datapoint for ${seriesData.name} but that was not included in the xAxisValues array.  This may cause unexpected issues and should be fixed.`)
                    }

                    if (!smallestValue || smallestValue > seriesData.value) {
                        smallestValue = seriesData.value;
                    }
                }
            }

            // Create the new series using the smallest value
            const xAxisValuesSeries = [];
            for (const xAxisValue of this.lineGraphModel.xAxisValues) {
                xAxisValuesSeries.push({
                    name: xAxisValue,
                    value: smallestValue,
                });
            }

            // The graph has been configured to hide any series named 'TIMELINE_PLACEHOLDER' from the tooltip
            this.shadowData.push({
                name: this.TIMELINE_PLACEHOLDER,
                series: xAxisValuesSeries
            });
        }

        // ShadowData is now either an empty array or a newly generated series
        // Append the rest of the data to this array
        this.shadowData = this.shadowData.concat(this.lineGraphModel.data);

        this.shadowDataCopy = this.shadowData.slice();

        for (let x = 0; x <= this.shadowData[0].series.length; x++) {
            if (this.shadowData[0].series[x]) {
                this.filterValues.push({value : this.shadowData[0].series[x].name, content: this.shadowData[0].series[x].name});
            }
        }

        this.rangeFrom = this.filterValues[0].value;
        this.rangeTo = this.filterValues[this.filterValues.length - 1].value;

        // use this function for the dots on the side START
        let flattenedData: any = this.lineGraphModel.data;

        flattenedData = flattenedData.map((x, ind) => {
            return x.series.map(y => {
                const val = (y.value === '') ? 'N/A' : y.value;
                return {
                    name: y.name,
                    series: x.name,
                    value: val,
                    color: this.lineGraphModel.colorScheme.domain[ind]
                };
            });
        });

        flattenedData = flattenedData.reduce((acc, val) => acc.concat(val), []);

        for (let x = 0; x < this.lineGraphModel.data[0].series.length; x++) {
            const verticalTarget = this.lineGraphModel.data[0].series[x].name;
            let label = '';

            flattenedData.map(y => {
                if (verticalTarget === y.name) {
                    label += y.series.concat('-' + y.value + ' ');
                }
            });

            this.flattenedDataArray.push(verticalTarget + ':' + label);
        }
        // use this function for the dots on the side END

        // use this function for the legend START
        for (let x = 0; x < this.shadowData[0].series.length; x++) {
            const verticalTarget = this.shadowData[0].series[x].name;
            const label = [];

            flattenedData.map(y => {
                if (verticalTarget === y.name) {
                    label.push({ 'name' : y.series, 'value': y.value, 'color': y.color});
                }
            });

            this.legendDataArray.push({ 'series' : verticalTarget, 'description' : label });
        }
        // use this function for the legend END
    }

    ngAfterViewInit() {
        if (document.getElementsByClassName('tooltip-anchor')[0]) {
            document.getElementsByClassName('tooltip-anchor')[0].setAttribute('width', '4');
            this.updateSingleDataPointPaths();
        }
    }

    // updateSingleDataPointPaths parses through all path dom elements and finds paths that have only one x/y data point
    // Since paths with that criteria do not display, we have to "smudge" the path and add a second data point near the
    // first one in order for it to show.
    updateSingleDataPointPaths() {
        const lineDotClass = 'lineDot';

        // Remove the lineDot class from all elements
        const allLineDots = document.querySelectorAll(`.${lineDotClass}`);
        [].forEach.call(allLineDots, function(el: Element) {
            el.classList.remove(lineDotClass);
        });

        const paths = document.querySelectorAll('path');
        let pathCounter = 0;
        Array.from(paths).forEach((path) => {
            const pathData = path.getAttribute('d');
            if (pathData) {
                const pathDataParts = pathData.split(',');
                if (pathDataParts.length === 2) {
                    const startX = parseInt(pathDataParts[0].replace('M', ''), 10) - 1;
                    const startY = parseInt(pathDataParts[1].replace('Z', ''), 10) - 1;
                    const endX = startX + 2;
                    const endY = startY + 2;

                    pathDataParts[0] = `M${startX}`;
                    pathDataParts[1] = `${startY}`;
                    pathDataParts.push(`${endX}`);
                    pathDataParts.push(`${endY}Z`);

                    const pathDataNew = pathDataParts.join(',');
                    const lineClass = document.querySelectorAll('path')[pathCounter].getAttribute('class');

                    document.querySelectorAll('path')[pathCounter].setAttribute('d', pathDataNew);
                    document.querySelectorAll('path')[pathCounter].setAttribute('stroke-linecap', 'round');
                    document.querySelectorAll('path')[pathCounter].setAttribute('class', `${lineClass} lineDot`);

                }
            }
            pathCounter++;
        });
        this.resize();
    }

    moveDot(num) {
        this.focusDot += num;
    }

    findTab(e) {
        if (e.target.id === 'lastModalTab') { document.getElementById('dropdown-' + this.lineGraphModel.xLabel + '_2').focus(); }
        if (e.target.id === 'firstModalTab') { document.getElementById('marker_0').focus(); }
    }

    setPosition() {
        setTimeout( () => {
            const tickTransform = document.querySelectorAll('.x.axis .tick');
            const container = document.getElementById('dotsContainer').getBoundingClientRect().left;

            for (let x = 0; x < tickTransform.length; x++) {
                const tick = tickTransform[x].getBoundingClientRect();
                const left = tick.left - container;
                const width = tick.width;

                const target = document.getElementById('marker_' + x);

                if (target) {
                    target.style.left = left + 'px';
                    target.style.width = width + 'px';
                }

            }
        }
        , 1000);
    }

    highlight(e) {
        this.focusDot = e;
        this.alert = 'alert';
    }

    openInfo(e) {
         this.openInfoArea = !this.openInfoArea;
    }

    seeModel(e) {
        return e;
    }

    resize() {
        const graphContainer = document.getElementsByClassName('lineShell')[0].clientWidth;
        this.view = [graphContainer, graphContainer / 2];

        if (graphContainer < 544) {
            this.updateWidthClass = 'ds-l-col--12';
            this.changeLegend = true;
            this.lineGraphModel.yAxis = false;
        } else {
            this.updateWidthClass = 'ds-l-col';
            this.changeLegend = false;
            this.lineGraphModel.yAxis = true;
        }

        this.setPosition();
    }

    setNewRange(rF, rT) {
        // Reset Range
        this.rFI = null;
        this.rTI = null;

        this.errorMessage = '';

        this.shadowDataCopy.map(x => {
            x.series.map((y, ind, arr) => {
                // Set values if they are the first ones found
                if (y.name === rF && this.rFI === null) {
                    this.rFI = ind;
                }
                if (y.name === rT && this.rTI === null) {
                    this.rTI = ind;
                }
            });
        });

        if (this.rFI < this.rTI) {
            this.shadowData = this.shadowDataCopy.map(x => {
                return {
                    name: x.name,
                    series: x.series.filter((y) => {
                        // get index of curent data point in relation to the first line
                        // assumption: the first series contains all datapoints
                        let index;
                        this.shadowDataCopy[0].series.some((line, i) => {
                            if (line.name === y.name) {
                                return index = i;
                            }
                        });

                        // only return data points in this series that are between the selected datapoints in relation to the first serires
                        return (index >= this.rFI && index <= this.rTI);
                    })
                };
            });

            this.focusDot = 0;
            setTimeout(() => {
                this.updateSingleDataPointPaths();
            }, 0);
        } else {
            this.errorMessage = 'Incorrect range detected';
        }

        this.setPosition();
        // needs refactoring, as of now we are rendering dates the exist in the graph but if the range doesnt make sense, we give an error
    }

    setRangeFrom(e) {
        this.rangeFrom = e;
        this.setNewRange(this.rangeFrom, this.rangeTo);
    }

    setRangeTo(e) {
        this.rangeTo = e;
        this.setNewRange(this.rangeFrom, this.rangeTo);
    }

    onSelect(e) {
        // this.onLineClick.emit(e);
    }
}
