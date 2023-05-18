import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AngularDesignSystemModel } from '../../models/angular-design-system.models';
import { TooltipModel } from '../tooltip/tooltip.models';

export class CardClusterClusterModel extends AngularDesignSystemModel {
  value: string | number;
  name?: string;
  nameIcon?: IconDefinition;
  id?: string;
  valueIcon?: IconDefinition;
  ariaLabel?: string;
  ariaDescribedByName?: false;
  classValue?: string;
  classButton?: string;
  className?: string;
  tooltipModel?: TooltipModel;
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
  clusterIdPrefix?: string;
  cluster: CardClusterClusterModel[];
  tooltipModel?: TooltipModel;

  constructor(options?) {
    super();
    this.setOptions(options);
  }
}
