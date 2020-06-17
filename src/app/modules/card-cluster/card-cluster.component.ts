import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardClusterModel } from './card-cluster.models';

    @Component({
        selector: 'app-card-cluster',
        templateUrl: './card-cluster.component.html',
        styleUrls: ['./card-cluster.component.css']
    })
export class AppCardClusterComponent implements OnInit {

    @Input() cardArray: CardClusterModel;

    // The following inputs have been deprecated and moved into the CardClusterModel object
    @Input() buttonClicked = 'CardCluster0'; // DEPRECATED
    @Input() dataAutoId: string; // DEPRECATED

    @Output() passButton = new EventEmitter<any>();

    numArray1 = [];
    numArray = [];
    total: string = null;
    mainCardWidth: number;

    constructor() { }

    passAction(e) {
        if (!e.target.classList.contains('disabled')) {
            this.passButton.emit(e);
            this.cardArray.buttonClicked = e.target.id;
        }
    }

    ngOnInit() {

        if (!this.cardArray) {
            this.cardArray = new CardClusterModel();
        }

        // TODO: remove this code once this.buttonClicked is fully removed
        if (this.buttonClicked) {
            if (!this.cardArray.buttonClicked) {
                this.cardArray.buttonClicked = this.buttonClicked;
            }
            this.buttonClicked = null;
        }

        // TODO: remove this code once this.dataAutoId is fully removed
        if (this.dataAutoId) {
            if (!this.cardArray.dataAutoId) {
                this.cardArray.dataAutoId = this.dataAutoId;
            }
            this.dataAutoId = null;
        }

        // determine width of main card
        // the main card will display as full width if there are no other cards, otherwise it will be 3 columns wide
        if (this.cardArray.cluster.length === 0) {
            this.mainCardWidth = 12;
        } else {
            this.mainCardWidth = 4;
        }

        // Main card total
        let cardsTotal: string | number = null;
        if (this.cardArray.total !== null &&  this.cardArray.total !== undefined) {
            cardsTotal = this.cardArray.total;
        } else {
            this.cardArray.cluster.map( card => {
                if ((card.value || card.value === 0) && typeof card.value === 'number') {
                    // if CardsTotal is not set, but numbers exist as values in the clusters,
                    // change cardsTotal to 0 so that it can be used as a running total
                    if (cardsTotal === null) {
                        cardsTotal = 0;
                    }
                    if (typeof cardsTotal === 'number') {
                        cardsTotal += card.value;
                    }
                }
            });
        }

        // Convert the total value to a string because angular ignores the numerical value of 0
        if (cardsTotal !== null) {
            this.total = cardsTotal.toString();
        }

        // If the amount of items per row is sent into the component, set the defaults
        if (!this.cardArray.rowMaxItems) {
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
            // Iterate through all cards to find the maximum height
            const cards: any = document.getElementsByClassName('cardHeight');
            let maxHeight = 0;
            for (const card of cards) {
                // reset height
                card.setAttribute('style', `height: auto;`);
                // check height of card after it has been reset and store the value of the tallest card in the cluster
                const elementHeight = card.offsetHeight;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            }

            // Iterate through all cards again to set a consistent height based on the maximum height of the cards
            for (const card of cards) {
                card.setAttribute('style', `height: ${maxHeight.toString()}px;`);
            }

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
