import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export class CardClusterClusterModel extends AngularDesignSystemModel {
  value: string | number;
  name?: string;
  nameIcon?: IconDefinition;
  valueIcon?: IconDefinition;
  ariaLabel?: string;
  classValue?: string;
  classButton?: string;
  className?: string;
  disabled = false;

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}

export class CardClusterModel extends AngularDesignSystemModel {
  mainCard = true;
  mainTitle?: string;
  mainTitleIcon?: IconDefinition;
  mainSub?: string;
  total?: number | string;
  ariaLabel?: string;
  rowMaxItems?: number;
  showRadioButton = false;
  buttonClicked?: string;
  dataAutoId?: string;
  resizeTimeout?: number;
  cluster: CardClusterClusterModel[];

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}
