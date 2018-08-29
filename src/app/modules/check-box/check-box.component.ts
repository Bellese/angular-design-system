import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})

export class AppCheckBox {
    @Input() index;
    @Input() value;
    @Input() groupName;
    @Input() showTitle: boolean = true;
    @Input() labelClass;
    
    constructor() { }
    
    ngOnInit() {
        (!this.index) ? this.index = 'main': false;
    }
}
