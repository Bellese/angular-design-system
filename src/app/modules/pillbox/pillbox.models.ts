import { TooltipModel } from '../tooltip/tooltip.models';

/** Wrapper type to allow multiple formats for input data */
export type PillboxContentType =
  PillboxContent | PillboxColumnContent | PillboxContentPair | PillboxFraction;

/**
 * Core, single content item for the Pillbox.
 *
 * @remarks
 * 'classes' overrides default styling, 'bold' always appends.
 * 'tooltipModel' overrides 'label'
 * 'innerHTML' will override 'tooltipModel' or 'label'
 */
export type PillboxContent = {
  label: string,
  classes?: string,
  bold?: boolean,
  innerHTML?: string,
  hqrDataTest?: string,
  tooltip?: string,
  tooltipModel?: TooltipModel,
}

/**
 * Minimum content used in most of the HTML template. It might get
 * directly passed in, or generated from PillboxContent.
 * A single line has - bottom: null
 */
export type PillboxColumnContent = {
  top: PillboxContent,
  bottom : PillboxContent,
}

/**
 * Allows flexible input for left and right content,
 * with a vertical divider line
 */
export type PillboxContentPair = {
  left: PillboxContent | PillboxColumnContent,
  right: PillboxContent | PillboxColumnContent,
}

/**
 * Allows simple creation of a specific Fraction / Rate use case
 */
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
