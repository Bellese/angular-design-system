import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class AppPlusComponent implements OnChanges {
    @Input() expand: boolean;
    @Input() clicked: boolean;
    @Input() plusClass = '';

    svgPlusClass = '';

    ngOnChanges() {
        if (this.clicked) {
            (this.expand) ? this.expanded() : this.retracted();
        } else {
            this.svgPlusClass = '';
        }
    }

    expanded() {
        this.svgPlusClass = 'expand';
    }

    retracted() {
        this.svgPlusClass = 'collapse';
    }
}
