import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() variation: string;
    @Input() heading: string;
    @Input() hideIcon: boolean = false;
    @Input() hideClose: boolean = false;
    @Input() dataAutoId: string;

    hide: boolean;

}
