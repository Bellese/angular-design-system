import { TooltipModel } from "../tooltip/tooltip.models";

export type PillboxContent = {
  label: string,
  classes?: string,
  bold?: boolean,
  innerHTML?: string,
  hqrDataTest?: string,
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
  hqrDataTest?: string,
  rateTooltip: string,
}

export type PillboxColumnContent = {
  top: PillboxContent,
  bottom : PillboxContent,
}

export type PillboxContentPair = {
  left: PillboxContent | PillboxColumnContent,
  right: PillboxContent | PillboxColumnContent,
}

export type PillboxContentType =
  PillboxContent | PillboxColumnContent | PillboxContentPair | PillboxFraction;
