import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';

export class CardClusterClusterModel extends AngularDesignSystemModel {
  value: string | number;
  name?: string;
  nameIcon?: IconDefinition;
  id: string;
  valueIcon?: IconDefinition;
  ariaLabel?: string;
  ariaDescribedbyName?: false;
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
  mainTitleClass?: string;
  mainSub?: string;
  total?: number | string;
  ariaLabel?: string;
  rowMaxItems?: number;
  showRadioButton = false;
  buttonClicked?: string;
  dataAutoId?: string;
  resizeTimeout?: number;
  idRoot?: string;
  cluster: CardClusterClusterModel[];

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}
