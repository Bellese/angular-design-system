import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})

export class AppLineGraph {
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
    @Input() toolTip: boolean;
    @Output() onLineClick = new EventEmitter<object>();
    current;
    shadowData;
    errorMessage: string;
    openInfoArea: boolean = false;
    focusDot = 0;
    flattenedDataArray = [];
    legendDataArray = [];
    rFI = 0;
    rTI;
    updateWidthClass;
    changeLegend;
    alert;
    
    ngOnInit(){
        
    if (typeof SVGElement.prototype.contains == 'undefined') {
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
                
                var mouseEvent = document.createEvent('MouseEvent');
                
                mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

                return mouseEvent;
            }

            MouseEvent.prototype = Event.prototype;

            (<any>window).MouseEvent = MouseEvent;
        })(window);
        
        this.resize();
        
        this.shadowData = this.data;
        
        for(let x = 0; x <= this.data[0].series.length; x++) {
            if(this.data[0].series[x]) {
                this.filterValues.push(this.data[0].series[x].name);   
            }    
        }
        
        this.rangeFrom = this.filterValues[0];
        this.rangeTo = this.filterValues[this.filterValues.length-1];

        //use this function for the dots on the side START
            let flattenedData = this.data;

                flattenedData = flattenedData.map((x, ind) => {
                    return x.series.map(y => { 
                        let val = (y.value === "") ? "N/A": y.value;
                        return {
                            name: y.name,
                            series: x.name,
                            value: val,
                            color: this.colorScheme.domain[ind]
                        }
                    })
                })

                flattenedData = flattenedData.reduce((acc, val) => acc.concat(val), []);

            for(let x = 0; x < this.data[0].series.length; x++) {
                let verticalTarget = this.data[0].series[x].name;
                let label = "";

                flattenedData.map(y => {
                   if(verticalTarget === y.name) {
                       label += y.series.concat('-' + y.value + ' ');
                   }
                });

                this.flattenedDataArray.push(verticalTarget + ':' + label);
            }
        //use this function for the dots on the side END
        
        //use this function for the legend START
            for(let x = 0; x < this.data[0].series.length; x++) {
                let verticalTarget = this.data[0].series[x].name;
                let label = [];

                flattenedData.map(y => {
                   if(verticalTarget === y.name) {
                       label.push({ 'name' : y.series, 'value': y.value, 'color': y.color});
                   }
                });

                this.legendDataArray.push({ 'series' : verticalTarget, 'description' : label });
            }
        //use this function for the legend END
    }
    
    ngAfterViewInit() {
        document.getElementsByClassName("tooltip-anchor")[0].setAttribute("width","4");
    }
    
    moveDot(num) {
        this.focusDot += num;
    }
    
    findTab(e) {
        (e.target.id === "lastModalTab") ? document.getElementById('dropdown-' + this.xLabel + '_2').focus() : false;
        (e.target.id === "firstModalTab") ? document.getElementById("marker_0").focus() : false;
    }
    
    setPosition() {
        setTimeout( () => {
            let tickTransform = document.querySelectorAll('.x.axis .tick');
            let container = document.getElementById("dotsContainer").getBoundingClientRect().left;
            
            for(let x = 0; x < tickTransform.length; x++) {                
                let tick = tickTransform[x].getBoundingClientRect();
                let left = tick.left - container;
                let width = tick.width;
                
                let target = document.getElementById("marker_"+x);

                    target.style.left = left + 'px';
                    target.style.width = width + 'px';
            }
        }
        , 200);
    }
    
    highlight(e){
        this.focusDot = e;
        this.alert = "alert";
    }
    
    openInfo(e) {
         this.openInfoArea = !this.openInfoArea;
    }
    
    seeModel(e){
        
        console.log(e)
        return e;
    }
   
    resize() {
        let graphContainer = document.getElementsByClassName("lineShell")[0].clientWidth;
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
        this.errorMessage = "";
        
        this.data.map(x => {
            x.series.map((y, ind, arr) => {
                (y.name === rF) ? this.rFI = ind : false;
                (y.name === rT) ? this.rTI = ind : false;
            });
        });
        
        if (this.rFI < this.rTI) {
            this.shadowData = this.data.map(x => {
                return {
                    name: x.name,
                    series: x.series.filter((y, ind) => {
                                return (ind >= this.rFI && ind <= this.rTI);
                            })
                }
            });   
            
            this.focusDot = 0; 
        } else {
            this.errorMessage = "Incorrect range detected";
        }
        
        this.setPosition();
        //needs refactoring, as of now we are rendering dates the exist in the graph but if the range doesnt make sense, we give an error
    }
    
    setRangeFrom(e){
        this.rangeFrom = e;
        this.setNewRange(this.rangeFrom, this.rangeTo);
    }
    
    setRangeTo(e){ 
        this.rangeTo = e;
        this.setNewRange(this.rangeFrom, this.rangeTo);
    }

    onSelect(e) {
        //this.onLineClick.emit(e);
    }
}