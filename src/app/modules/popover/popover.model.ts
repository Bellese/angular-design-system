export class PopoverItemModel {
    id: string;
    label: string;
    ariaLabel: string;
    dataAutoId: string;
    url: string;

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        if (options) {
            for (const key of Object.keys(options)) {
                this[key] = options[key];
            }
        }
     }
}

export class PopoverModel {
    id = 'popover';
    label = 'Open Popover';
    ariaLabel = 'Activate enter key to open popover'
    dataAutoId = 'popover';
    items: PopoverItemModel[] = [];

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        if (options) {
            for (const key of Object.keys(options)) {
                this[key] = options[key];
            }
        }
     }
}
