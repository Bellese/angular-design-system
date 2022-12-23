import { TooltipModel } from "../tooltip/tooltip.models";

export type PillboxContent = {
  label: string,
  classes?: string,
  bold?: boolean,
  innerHTML?: string,
  tooltip?: string,
  tooltipModel?: TooltipModel,
}

export type PillboxFraction = {
  numerator: number,
  numeratorLabel?: string,
  denominator: number,
  denominatorLabel?: string,
  rate: number,
  rateLabel?: string,
  rateTooltip: string,
}
