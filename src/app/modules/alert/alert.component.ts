import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() variation: string;
    @Input() heading: string;
    @Input() hideIcon = false;
    @Input() hideClose = false;
    @Input() dataAutoId: string;
    @Input() dataTest: string;

    hide: boolean;
    dataTestVals = {
      outer: null,
      close: null,
      heading: null,
    };

    ngOnInit() {
      if (this.dataTest) {
        this.dataTestVals = {
          outer: `${this.dataTest}-${this.variation}`,
          close: `${this.dataTest}-close`,
          heading: `${this.dataTest}-heading`,
        };
      }
    }
}
