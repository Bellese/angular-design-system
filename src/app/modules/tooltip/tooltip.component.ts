// Angular
import { Component, Input, OnInit } from '@angular/core';
import { NgxTippyProps } from 'ngx-tippy-wrapper';

// Models
import { TooltipModel, TooltipTriggerTypeEnum } from './tooltip.models';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() tooltipModel: TooltipModel = new TooltipModel();

  TooltipTriggerTypeEnum = TooltipTriggerTypeEnum;
  tippyProps: NgxTippyProps;

  constructor() {}

  ngOnInit(): void {
    this.tippyProps = {
      content: this.tooltipModel.tooltipContent,
      trigger: 'mouseenter focus click',
      theme: this.tooltipModel.inversed ? 'hqr-inversed' : 'hqr',
      maxWidth: this.tooltipModel.maxWidth,
      offset: this.tooltipModel.offset,
      placement: this.tooltipModel.placement,
      duration: this.tooltipModel.transitionDuration,
      allowHTML: true,
    };
  }
}
