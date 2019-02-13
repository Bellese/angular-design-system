import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'app-card-cluster',
        templateUrl: './card-cluster.component.html',
        styleUrls: ['./card-cluster.component.css']
    })
export class AppCardCluster implements OnInit {

    @Input() cardArray;
    
    @Output() passButton = new EventEmitter<any>();
    
    buttonClicked = "CardCluster0";
    numArray1 =[];
    numArray = [];
    total = 0;
    
    constructor() { }
    
    passAction(e) {
        this.passButton.emit(e);
        this.buttonClicked = e.target.id;
    }

    ngOnInit() {
        //total
        this.cardArray.cluster.map( x => {
            (x.value && typeof x.value === 'number') ? this.total += x.value : null;
        })
        
        //sequence 1 is for desktop layout
        if (this.cardArray.cluster.length % 4 === 0 || this.cardArray.cluster.length % 3 === 0) {
            this.cardArray.cluster.map( x => {
                if (this.cardArray.cluster.length % 3 === 0 && this.cardArray.cluster.length % 4 !== 0) {
                    this.numArray1.push(Object.assign({sequence: 4}, x));
                } else {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                }
            })
        } else {
            let rows = Math.floor(this.cardArray.cluster.length / 4);
            this.cardArray.cluster.map( (x, ind) => {
                if((ind+1) <= rows * 4) {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                } else {
                    let seq = 12 / (this.cardArray.cluster.length % 4);
                    this.numArray1.push(Object.assign({sequence: seq}, x));
                }
            })
        }
        
        //sequence 2 is for mobile layout
        if (this.numArray1.length % 2 === 0) {
            this.numArray1.map( x => {
                this.numArray.push(Object.assign({sequence2: 6}, x));
            })
        } else {
            let rows = Math.floor(this.numArray1.length / 2);
            this.numArray1.map( (x, ind) => {
                if((ind+1) <= rows * 2) {
                    this.numArray.push(Object.assign({sequence2: 6}, x));
                } else {
                    let seq = 12 / (this.cardArray.cluster.length % 2);
                    this.numArray.push(Object.assign({sequence2: seq}, x));
                }
            })
        }
    }
    
    resize() {
        setTimeout(()=>{
            let graphContainer = window.outerWidth;

            if (this.cardArray.mainCard && graphContainer >= 768) {
                let followHeight = document.getElementById("followCard").clientHeight - 86;
                document.getElementById("CardCluster0").style.height = followHeight + 'px';
            } else if (this.cardArray.mainCard && graphContainer < 768) {
                document.getElementById("CardCluster0").style.height = 'auto';
            }
        }, 250);
    }

}
