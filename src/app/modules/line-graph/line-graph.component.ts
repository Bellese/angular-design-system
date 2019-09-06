import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})

export class AppLineGraphComponent implements OnInit, AfterViewInit {
    view: any[];
    filterValues: any[] = [];
    rangeFrom;
    rangeTo;

    @Input() data: any[];
    @Input() colorScheme: any = {
        domain: ['#6DB6FF', '#DB6D00', '#009292', '#666666']
    };

    @Input() animations: boolean;
    @Input() gradient: boolean;
    @Input() gridLines: boolean;
    @Input() roundDomain: boolean;
    @Input() xAxisValues: string[];
    @Input() xAxis: boolean;
    @Input() yAxis: boolean;
    @Input() showXLabel: string;
    @Input() showYLabel: string;
    @Input() xLabel: string;
    @Input() yLabel: string;
    @Input() xAxisTickFormatting;
    @Input() yAxisTickFormatting;
    @Input() autoScale: boolean;
    @Input() timeLine: boolean;
    @Input() tooltipDisabled: boolean;
    @Input() dataAutoId: string;
    @Output() LineClick = new EventEmitter<object>();

    current;
    shadowData;
    errorMessage: string;
    openInfoArea = false;
    focusDot = 0;
    flattenedDataArray = [];
    legendDataArray = [];
    rFI = 0;
    rTI;
    updateWidthClass;
    changeLegend;
    alert;

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
        if (this.xAxisValues) {
            const xAxisValuesSeries = [];
            for (const xAxisValue of this.xAxisValues) {
                xAxisValuesSeries.push({
                    name: xAxisValue,
                    value: false,
                });
            }
            this.shadowData.push({
                name: 'Placeholder',
                series: xAxisValuesSeries
            });
        }

        this.shadowData = this.shadowData.concat(this.data);

        for (let x = 0; x <= this.data[0].series.length; x++) {
            if (this.data[0].series[x]) {
                this.filterValues.push({value : this.data[0].series[x].name, content: this.data[0].series[x].name});
            }
        }

        this.rangeFrom = this.filterValues[0].value;
        this.rangeTo = this.filterValues[this.filterValues.length - 1].value;

        // use this function for the dots on the side START
            let flattenedData = this.data;

                flattenedData = flattenedData.map((x, ind) => {
                    return x.series.map(y => {
                        const val = (y.value === '') ? 'N/A' : y.value;
                        return {
                            name: y.name,
                            series: x.name,
                            value: val,
                            color: this.colorScheme.domain[ind]
                        };
                    });
                });

                flattenedData = flattenedData.reduce((acc, val) => acc.concat(val), []);

            for (let x = 0; x < this.data[0].series.length; x++) {
                const verticalTarget = this.data[0].series[x].name;
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
            for (let x = 0; x < this.data[0].series.length; x++) {
                const verticalTarget = this.data[0].series[x].name;
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

            // Array.prototype.forEach.call(paths, function (path) {
            //     console.log(path.getAttribute('d'));
            // });
            this.updatePaths();
        }
    }

    updatePaths() {
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
                    this.setPathData(pathCounter, pathDataNew);
                    // path.setAttribute('d', pathDataNew);
                    // console.log('end', path);
                    // console.log(path.getAttribute('d'))
                }
            }
            pathCounter++;
        });
    }

    setPathData(pathCounter, pathDataNew) {
        setTimeout(() => {
            console.log('set this');
            document.querySelectorAll('path')[pathCounter].setAttribute('d', pathDataNew);
            document.querySelectorAll('path')[pathCounter].setAttribute('stroke-linecap', 'round');
            const lineClass = document.querySelectorAll('path')[pathCounter].getAttribute('class');
            document.querySelectorAll('path')[pathCounter].setAttribute('class', `${lineClass} lineDot`);
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    moveDot(num) {
        this.focusDot += num;
    }

    findTab(e) {
        if (e.target.id === 'lastModalTab') { document.getElementById('dropdown-' + this.xLabel + '_2').focus(); }
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

                    target.style.left = left + 'px';
                    target.style.width = width + 'px';
            }
        }
        , 200);
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
            this.yAxis = false;
        } else {
            this.updateWidthClass = 'ds-l-col';
            this.changeLegend = false;
            this.yAxis = true;
        }

        this.setPosition();
    }

    setNewRange(rF, rT) {
        this.errorMessage = '';

        this.data.map(x => {
            x.series.map((y, ind, arr) => {
                if (y.name === rF) { this.rFI = ind; }
                if (y.name === rT) { this.rTI = ind; }
            });
        });

        if (this.rFI < this.rTI) {
            this.shadowData = this.data.map(x => {
                return {
                    name: x.name,
                    series: x.series.filter((y, ind) => {
                                return (ind >= this.rFI && ind <= this.rTI);
                            })
                };
            });

            this.focusDot = 0;
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
