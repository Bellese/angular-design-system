import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModel } from '../tooltip/tooltip.models';
import { PillboxColumnContent, PillboxContent, PillboxContentPair, PillboxContentType, PillboxFraction } from './pillbox.models';

// Not implementing 'id' until it's proven necessary. I.e. to re-use ids elsewhere
// for aria-labeledby etc. Tooltips can accept 'id' values, but utility isn't immediately
// apparent. If id control in Tooltip is required, we can still pass it in with TooltipModel.
// We can also workaround quite a bit with innerHTML until a solid need or design emerges.

@Component({
  selector: 'app-pillbox',
  templateUrl: './pillbox.component.html',
  styleUrls: ['./pillbox.component.css'],
})
export class AppPillboxComponent implements OnInit {
  @Input() data!: PillboxContentType;

  contentFirst: PillboxColumnContent;
  contentSecond: PillboxColumnContent = null;
  contentFraction: PillboxFraction = null;

  ngOnInit(): void {
    // Any more complex than this, and we'll need enums and a prop to 'switch' on
    // for handling various *Content* types
    if ("numerator" in this.data) {
      // Handle PillboxFraction - a bespoke usecase
      let { left, right } = this.makeFractionContent(this.data);
      this.contentFirst = left;
      this.contentSecond = right;
      this.contentFraction = this.data;
    } else if ("left" in this.data) {
      // Handle PillboxContentPair
      // PillboxContent or PillboxColumnContent on either side with a vertical divider
      let { left, right } = this.makePairContent(this.data);
      this.contentFirst = left;
      this.contentSecond = right;
    } else if ("top" in this.data) {
      // Handle a single PillboxColumnContent
      this.setContent(this.data.top);
      this.setContent(this.data.bottom);
      this.contentFirst = this.data;
    } else if ("label" in this.data) {
      // Handle a single PillboxContent
      this.setContent(this.data);
      this.contentFirst = {
        top: this.data,
        bottom: null,
      };
    }
  }

  /**
   * Modifies PillboxContent c to handle customization, or set defaults as required
   *
   * @remarks
   * 'classes' will override default styling. 'bold' always appends.
   *
   * @param c PillboxContent
   */
  private setContent(c: PillboxContent) {
    // Set default style/classes if none provided
    if (!c.classes) {
      c.classes = 'ds-u-font-size--base'
    }

    if (c.bold) {
      c.classes = `${c.classes} ds-u-font-weight--bold`;
    }

    // Honor provided TooltipModel, otherwise set default with provided tooltip content
    if (c.tooltip || c.tooltipModel) {
      c.tooltipModel = c.tooltipModel ?? this.makeTooltipModel(c.tooltip, c.label);
    }

    if (!c.hqrDataTest) {
      c.hqrDataTest = '';
    }
  }

  /**
   * Creates tooltip with UX defaults for this component, using only label and tooltip text
   *
   * @param tip text label for the tooltip
   * @param label text label to receive the tooltip
   * @returns TooltipModel via tooltip.models / app-tooltip
   */
  private makeTooltipModel(tip: string, label: string): TooltipModel {
    let model : TooltipModel;

    model = new TooltipModel({
      triggerContent: label,
      tooltipContent: tip,
      maxWidth: 148,
      id: '', // otherwise it ends up 'undefined' or 'null' as strings in HTML
    });

    return model;
  }

  /**
   * Creates left and right PillboxColumnContent, with applied defaults or overrides,
   * allowing passing in a single PillboxContent for either half.
   *
   * @param pair PillboxContent or PillboxColumnContent for each side
   * @returns left and right PillboxColumnContent, as required by the html tempalte
   */
  private makePairContent(pair: PillboxContentPair): {
    left: PillboxColumnContent,
    right: PillboxColumnContent,
  } {
    var left: PillboxColumnContent;
    var right: PillboxColumnContent;

    if ("top" in pair.left) {
      left = pair.left;
      this.setContent(left.bottom);
    } else {
      left = {
        top: pair.left,
        bottom: null,
      };
    }
    this.setContent(left.top);

    if ("top" in pair.right) {
      right = pair.right;
      this.setContent(right.bottom);
    } else {
      right = {
        top: pair.right,
        bottom: null,
      };
    }
    this.setContent(right.top);

    return {left, right};
  }

  /**
   * Creates left and right PillboxColumnContent from focused PillboxFraction values,
   * using specific styles and design goals.
   *
   * @param frac PillboxFraction
   * @returns PillboxFraction-specific left and right PillboxColumnContent,
   * as required by the html template
   */
  private makeFractionContent(frac: PillboxFraction): {
    left: PillboxColumnContent,
    right: PillboxColumnContent,
  } {
    let fractionTooltip: TooltipModel;
    const fractionRate = frac.rate > 0 ? formatPercent(frac.rate, 'en-us') : 'n/a';

    frac.rateLabel = frac.rateLabel ?? 'Rate';

    fractionTooltip = this.makeTooltipModel(frac.rateTooltip, fractionRate);
    fractionTooltip.ariaLabel = `${frac.rateLabel} is
      ${fractionRate != 'n/a' ? fractionRate : 'Not Applicable'}`;

    let left = <PillboxColumnContent>{
      top: {
        label: frac.numeratorLabel ?? 'Numerator',
      },
      bottom: {
        label: frac.denominatorLabel ?? 'Denominator',
      }
    };
    this.setContent(left.top);
    this.setContent(left.bottom);

    let right = <PillboxColumnContent>{
      top: {
        label: frac.rateLabel,
      },
      bottom: {
        label: fractionRate,
        classes: `ds-u-font-size--lead`,
        bold: true,
        tooltipModel: fractionTooltip,
      }
    };
    this.setContent(right.top);
    this.setContent(right.bottom);

    return {left, right};
  }
}
