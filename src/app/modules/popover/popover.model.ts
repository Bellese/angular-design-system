import { AngularDesignSystemModel } from '../../models/angular-design-system.models';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class PopoverItemModel extends AngularDesignSystemModel {
  id: string;
  label: string;
  ariaLabel: string;
  dataAutoId: string;
  url: string;
  onClick: any;
  icon?: IconDefinition;

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}

export enum mdePopoverPositionXEnum {
  BEFORE = 'before',
  AFTER = 'after',
}

export enum mdePopoverPositionYEnum {
  ABOVE = 'above',
  BELOW = 'below',
}

// tslint:disable-next-line: max-classes-per-file
export class PopoverModel extends AngularDesignSystemModel {
  id = 'popover';
  icon: IconDefinition = null;
  label = 'Open Popover';
  ariaLabel = 'Activate enter key to open popover';
  ariaLiveTextOpen = 'The popover menu has been opened';
  ariaLiveTextClosed = 'The popover menu has been closed';
  buttonClass = 'ds-u-color--base';
  showArrow = true;
  mdePopoverPositionX? = mdePopoverPositionXEnum.BEFORE;
  mdePopoverPositionY? = mdePopoverPositionYEnum.BELOW;
  dataAutoId = 'popover';
  items: PopoverItemModel[] = [];

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}
