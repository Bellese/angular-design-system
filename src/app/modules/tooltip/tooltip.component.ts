// Angular
import { Component, Input, OnInit } from '@angular/core';

// Models
import { TooltipModel, TooltipTriggerTypeEnum } from './tooltip.models';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() tooltipModel: TooltipModel;

  TooltipTriggerTypeEnum = TooltipTriggerTypeEnum;
  tooltipProps;

  constructor() {}

  ngOnInit(): void {
    this.tooltipProps = {
      content: this.tooltipModel.tooltipContent,
      trigger: 'mouseenter focus click',
      theme: this.tooltipModel.inversed ? 'hqr-inversed' : 'hqr',
    };
  }
}
