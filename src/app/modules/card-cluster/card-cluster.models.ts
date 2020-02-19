import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export class CardClusterClusterModel extends AngularDesignSystemModel {
    value: string | number;
    name: string;
    ariaLabel: string;
    classValue?: string;
    classButton: string;
    className: string;

    constructor(options?) {
        super(options);
    }
}

export class CardClusterModel extends AngularDesignSystemModel {
    mainCard = true;
    mainTitle?: string;
    mainSub?: string;
    total?: number | string;
    ariaLabel?: string;
    rowMaxItems?: number;
    showRadioButton = false;
    buttonClicked?: string;
    dataAutoId?: string;
    cluster: CardClusterClusterModel[];

    constructor(options?) {
        super(options);
    }
}