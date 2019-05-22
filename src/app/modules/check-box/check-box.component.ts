import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})

export class AppCheckBoxComponent implements OnInit {
    @Input() index: string;
    @Input() value: string;
    @Input() groupName: string;
    @Input() showTitle = true;
    @Input() labelClass: string;
    @Input() dataAutoId: string;

    constructor() { }

    ngOnInit() {
        if (!this.index) { this.index = 'main'; }
    }
}
