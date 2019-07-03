import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'app-card-cluster',
        templateUrl: './card-cluster.component.html',
        styleUrls: ['./card-cluster.component.css']
    })
export class AppCardClusterComponent implements OnInit {

    @Input() cardArray;
    @Input() dataAutoId: string;

    @Output() passButton = new EventEmitter<any>();

    @Input() buttonClicked = 'CardCluster0';
    numArray1 = [];
    numArray = [];
    total: number = null;
    mainCardWidth: number;

    constructor() { }

    passAction(e) {
        this.passButton.emit(e);
        this.buttonClicked = e.target.id;
    }

    ngOnInit() {

        // determine width of main card
        // the main card will display as full width if there are no other cards, otherwise it will be 3 columns wide
        if (this.cardArray.cluster.length === 0) {
            this.mainCardWidth = 12;
        } else {
            this.mainCardWidth = 4;
        }

        // total
        this.cardArray.cluster.map( x => {
            (x.value && typeof x.value === 'number') ? this.total += x.value : null;
        });

        // sequence 1 is for desktop layout

        // If there are less than 8 cards, distribute the cards evenly between two rows.
        // If there is an odd number of cards, show the extra card in the top row
        if (this.cardArray.cluster.length <= 8) {
            this.cardArray.cluster.map( (x, ind) => {
                let seq: number;
                if ((ind + 1) <= Math.ceil(this.cardArray.cluster.length / 2)) {
                    seq = 12 / Math.ceil(this.cardArray.cluster.length / 2);
                } else {
                    seq = 12 / Math.floor(this.cardArray.cluster.length / 2);
                }
                this.numArray1.push(Object.assign({sequence: seq}, x));
            });

        // if the card amount is a multiple of 3 or 4, distribute them evenly
        } else if (this.cardArray.cluster.length % 4 === 0 || this.cardArray.cluster.length % 3 === 0) {
            this.cardArray.cluster.map( x => {
                if (this.cardArray.cluster.length % 3 === 0 && this.cardArray.cluster.length % 4 !== 0) {
                    this.numArray1.push(Object.assign({sequence: 4}, x));
                } else {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                }
            });

        // For all other situations, show 4 cards per row
        } else {
            const rows = Math.floor(this.cardArray.cluster.length / 4);
            this.cardArray.cluster.map( (x, ind) => {
                if ((ind + 1) <= rows * 4) {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                } else {
                    const seq = 12 / (this.cardArray.cluster.length % 4);
                    this.numArray1.push(Object.assign({sequence: seq}, x));
                }
            });
        }

        // sequence 2 is for mobile layout
        if (this.numArray1.length % 2 === 0) {
            this.numArray1.map( x => {
                this.numArray.push(Object.assign({sequence2: 6}, x));
            });
        } else {
            const rows = Math.floor(this.numArray1.length / 2);
            this.numArray1.map( (x, ind) => {
                if ((ind + 1) <= rows * 2) {
                    this.numArray.push(Object.assign({sequence2: 6}, x));
                } else {
                    const seq = 12 / (this.cardArray.cluster.length % 2);
                    this.numArray.push(Object.assign({sequence2: seq}, x));
                }
            });
        }
    }

    resize() {
        setTimeout(() => {
            const graphContainer = window.outerWidth;

            if (this.cardArray.mainCard && graphContainer >= 768) {
                const followHeight = document.getElementById('followCard').clientHeight - 86;
                document.getElementById('CardCluster0').style.height = followHeight + 'px';
            } else if (this.cardArray.mainCard && graphContainer < 768) {
                document.getElementById('CardCluster0').style.height = 'auto';
            }
        }, 250);
    }

}
