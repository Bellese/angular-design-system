import { Component, OnInit, Input } from '@angular/core';

    @Component({
        selector: 'app-card-cluster',
        templateUrl: './card-cluster.component.html',
        styleUrls: ['./card-cluster.component.css']
    })
export class AppCardCluster implements OnInit {

    @Input() cardArray = [
        {
            'value': 1
        },
        {
            'value': 2
        },
        {
            'value': 3
        },
        {
            'value': 4
        },
        {
            'value': 5
        },
        {
            'value': 6
        }];
    
    numArray1 =[];
    numArray = [];
    
    constructor() { }

    ngOnInit() {
        if (this.cardArray.length % 4 === 0 || this.cardArray.length % 3 === 0) {
            this.cardArray.map( x => {
                if (this.cardArray.length % 3 === 0 && this.cardArray.length % 4 !== 0) {
                    this.numArray1.push(Object.assign({sequence: 4}, x));
                } else {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                }
            })
        } else {
            let rows = Math.floor(this.cardArray.length / 4);
            this.cardArray.map( (x, ind) => {
                if((ind+1) <= rows * 4) {
                    this.numArray1.push(Object.assign({sequence: 3}, x));
                } else {
                    let seq = 12 / (this.cardArray.length % 4);
                    this.numArray1.push(Object.assign({sequence: seq}, x));
                }
            })
        }
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
                    let seq = 12 / (this.cardArray.length % 2);
                    this.numArray.push(Object.assign({sequence2: seq}, x));
                }
            })
        }
    }

}
