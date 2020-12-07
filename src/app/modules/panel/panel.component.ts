import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Animations } from '../animations/animations';
import { PanelIconPlacementEnum } from './panel.models';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [Animations.animations],
})
export class AppPanelComponent implements OnInit {
  @Output() panelClick = new EventEmitter<any>();
  @Output() plusAction = new EventEmitter<any>();
  @Input() title: string;
  @Input() titleExpanded: string;
  @Input() titleClass =
    'ds-u-fill--primary-darkest ds-u-color--white ds-u-font-size--h4 ds-u-md-font-size--h3 ds-u-padding--2';
  @Input() extTitle = false;
  @Input() extTitleClass: string;
  @Input() expand = false;
  @Input() expandedClass = 'ds-u-padding--2';
  @Input() openAll = false;
  @Input() dataAutoId: string;
  @Input() plusClass = '';
  @Input() bypassPanelState = false;
  @Input() icon: IconDefinition = faPlus;
  @Input() iconExpanded: IconDefinition = faMinus;
  @Input() iconPlacement: PanelIconPlacementEnum = PanelIconPlacementEnum.LEFT;

  clicked;
  PanelIconPlacementEnum = PanelIconPlacementEnum;

  constructor() {}

  ngOnInit() {
    if (this.expand) {
      this.clicked = true;
    }
  }

  panelStateChange(e) {
    this.panelClick.emit(e);
    if (!this.bypassPanelState) {
      this.clicked = true;
      this.expand = !this.expand;
    }
  }

  plusActionClick(e) {
    this.plusAction.emit(e);
    this.clicked = true;
  }
}
