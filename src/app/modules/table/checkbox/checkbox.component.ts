import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class AppCheckbox {
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
