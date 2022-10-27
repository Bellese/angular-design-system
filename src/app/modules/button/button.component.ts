import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ButtonInputTypeEnum } from './button.models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class AppButtonComponent {
  @Input() buttonInputType: ButtonInputTypeEnum = ButtonInputTypeEnum.BUTTON;
  @Input() ariaLabel: string;
  @Input() buttonType: string = 'ds-c-button--primary';
  @Input() buttonID: string;
  @Input() ariaSort: 'ascending' | 'descending' | 'none';
  @Input() dataAutoId: string;
  @Input() disabled: boolean;
  @Input() tabLevel = '0';
  @Output() callBack = new EventEmitter<any>();

  state = false;

  callBackFunction(e) {
    if (!this.disabled) {
      this.state = !this.state;
      if (e.key && e.key === 'Enter') {
        e = false;
      }

      if (e) {
        this.callBack.emit(e);
      }
    }
  }
}
