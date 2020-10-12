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
  ICON = 'icon',
}

export class TooltipModel extends AngularDesignSystemModel {
  ariaLabel?: string;
  id?: string;
  inversed = false;
  maxWidth?: number;
  offset?: number[];
  placement: TooltipPlacementEnum = TooltipPlacementEnum.AUTO;
  transitionDuration?: number;
  triggerType: TooltipTriggerTypeEnum = TooltipTriggerTypeEnum.LINK;
  triggerContent: string;
  triggerClass?: string;
  triggerActiveClass?: string;
  tooltipContent: string;
  tooltipClass?: string;

  constructor(options?: any) {
    super();
    this.setOptions(options);
  }
}
