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
    total: string = null;
    mainCardWidth: number;

    constructor() { }

    passAction(e) {
        this.passButton.emit(e);
        this.buttonClicked = e.target.id;
    }

    ngOnInit() {

        if (!this.cardArray) {
            this.cardArray = {
                'cluster': []
            };
        }

        // determine width of main card
        // the main card will display as full width if there are no other cards, otherwise it will be 3 columns wide
        if (this.cardArray.cluster.length === 0) {
            this.mainCardWidth = 12;
        } else {
            this.mainCardWidth = 4;
        }

        // Main card total
        let cardsTotal: number = null;
        if (this.cardArray.total !== null &&  this.cardArray.total !== undefined) {
            cardsTotal = this.cardArray.total;
        } else {
            this.cardArray.cluster.map( card => {
                if ((card.value || card.value === 0) && typeof card.value === 'number') {
                    cardsTotal += card.value;
                }
            });
        }

        // Convert the total value to a string because angular ignores the numerical value of 0
        if (cardsTotal !== null) {
            this.total = cardsTotal.toString();
        }

        // If the amount of items per row is sent into the component, set the defaults
        if (!this.cardArray.hasOwnProperty('rowMaxItems')) {
            // if there are more than 8 mini-cards in the cluster, show 4 items per row
            if (this.cardArray.cluster.length > 8) {
                this.cardArray.rowMaxItems = 4;

            // If there are less than 8 mini-cards in the cluster, split the cluster evenly between two rows
            // If there is an odd number of mini-cards, show the extra card on the top row
            } else {
                this.cardArray.rowMaxItems = Math.ceil(this.cardArray.cluster.length / 2);
            }
        }

        this.resize();
    }

    resize() {
        setTimeout(() => {
            const graphContainer = window.innerWidth;

            if (this.cardArray.mainCard && this.cardArray.cluster.length && graphContainer >= 1024) {
                const followHeight = document.getElementById('followCard').clientHeight - 86;
                document.querySelector('#CardCluster0 .cardClusterContent').setAttribute('style', `height: ${followHeight.toString()}px;`);
            } else if (this.cardArray.mainCard && graphContainer < 1024) {
                document.querySelector('#CardCluster0 .cardClusterContent').setAttribute('style', 'height: auto;');
            }
        }, 250);
    }

}
