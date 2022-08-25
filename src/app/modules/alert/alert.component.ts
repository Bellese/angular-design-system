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

    hide: boolean;
}
