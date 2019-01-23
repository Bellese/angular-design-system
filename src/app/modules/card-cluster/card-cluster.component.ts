import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
        selector: 'app-card-cluster',
        templateUrl: './card-cluster.component.html',
        styleUrls: ['./card-cluster.component.css']
    })
export class AppCardCluster implements OnInit {

    @Input() cardArray =
        {
            'mainTitle': 'STK-2',
            'mainSub': 'Episodes',
            'cluster': [
                {
                    'value': 13,
                    'name': 'IPP Not Met'
                },
                {
                    'value': 0,
                    'name': 'IPP Met'
                },
                {
                    'value': 1,
                    'name': 'Denominator'
                },
                {
                    'value': 16,
                    'name': 'Denominator'
                },
                {
                    'value': 85,
                    'name': 'Numerator'
                },
                {
                    'value': 3,
                    'name': 'Den. Exceptions'
                },
                {
                    'classValue': 'viewPerformanceIcon',
                    'classButton': 'vpi',
                    'name': 'View Performance',
                    'className': 'vpi'
                } 
            ]   
        };
    
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
        
        console.log(this.numArray);
    }

}
