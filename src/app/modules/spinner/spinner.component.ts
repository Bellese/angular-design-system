import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() size: string;
  @Input() color: string;
  @Input() filled: boolean;
  @Input() inversed: boolean;
  @Input() hide: boolean;
  @Input() dataAutoId: string;
}
