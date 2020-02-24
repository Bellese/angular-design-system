import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export class PopoverItemModel extends AngularDesignSystemModel {
    id: string;
    label: string;
    ariaLabel: string;
    dataAutoId: string;
    url: string;
    onClick: any;

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

export class PopoverModel extends AngularDesignSystemModel {
    id = 'popover';
    label = 'Open Popover';
    ariaLabel = 'Activate enter key to open popover';
    showArrow = true;
    mdePopoverPositionX ? = mdePopoverPositionXEnum.BEFORE;
    mdePopoverPositionY ? = mdePopoverPositionYEnum.BELOW;
    dataAutoId = 'popover';
    items: PopoverItemModel[] = [];

    constructor(options?) {
        super();
        this.setOptions(options);
    }
}
