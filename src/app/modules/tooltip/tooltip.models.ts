import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export enum TooltipPlacementEnum {
  AUTO = 'auto',
  BOTTOM = 'bottom',
  TOP = 'top',
  RIGHT = 'right',
  LEFT = 'left',
}

export enum TooltipTriggerTypeEnum {
  LINK = 'link',
  BUTTON = 'button',
}

export class TooltipModel extends AngularDesignSystemModel {
  ariaLabel?: string;
  id?: string;
  inversed = false;
  maxWidth?: number | 'none' = 'none';
  offset?: number[];
  placement: TooltipPlacementEnum = TooltipPlacementEnum.AUTO;
  transitionDuration?: number;
  triggerType: TooltipTriggerTypeEnum = TooltipTriggerTypeEnum.LINK;
  triggerContent: string;
  triggerIcon?: IconDefinition;
  triggerClass?: string;
  tooltipContent: string;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}
