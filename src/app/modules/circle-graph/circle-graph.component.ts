import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-circle-graph',
    templateUrl: './circle-graph.component.html',
    styleUrls: ['./circle-graph.component.css']
})

export class AppCircleGraphComponent implements OnInit {
    view: any[];

    @Input() data: any[];
    @Input() scheme: any = {
        domain: ['#2E8540', '#D7EAD3']
    };
    @Input() customColors: object;
    @Input() animations: boolean;
    @Input() labels: boolean;
    @Input() trimLabels: boolean;
    @Input() maxLabelLength: number;
    @Input() explodeSlices: boolean;
    @Input() doughnut: boolean;
    @Input() arcWidth: number;
    @Input() gradient: boolean;
    @Input() tooltipDisabled: object;
    @Input() title: string;
    @Input() dataAutoId: string;
    @Input() hideGraph: boolean;

    @Input() firstColumnName: string;
    @Output() passButton = new EventEmitter<any>();

    totalValues = 0;
    centerNum: string;
    @Input() buttonClicked = 'pieGraphCard0';

    ngOnInit() {
        this.resize();

        let rate;

        (this.data).map(x => {
            this.totalValues += x.value;

            if (x.attr && x.attr === 'rate') { rate = x.value; }
        });

        this.centerNum = Math.floor(100 * (rate / this.totalValues)) + '%';
    }

    passAction(e) {
        this.passButton.emit(e);
        this.buttonClicked = e.target.id;
    }

    resize() {
        if (!this.hideGraph) {
            const graphContainer = document.getElementsByClassName('circleGraphShell')[0].clientWidth;
            this.view = [graphContainer, graphContainer - 50];

            this.setPosition(graphContainer);
        }
    }

    setPosition(height) {
        const circle = document.querySelectorAll('.circleGraphShell')[0].getBoundingClientRect();
        const text = document.getElementById('centerText').style;
        const sub = document.getElementById('subText').style;

        sub.width = circle.width + 'px';
        text.width = circle.width + 'px';
        text.top = height / 2 - 50 + 'px';
    }

    onSelect(e) {
        console.log(e);
    }

    onActivate(e) {
        console.log(e);
    }

    onDeactivate(e) {
        console.log(e);
    }
}
