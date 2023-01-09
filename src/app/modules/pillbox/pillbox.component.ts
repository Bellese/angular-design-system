import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModel } from '../tooltip/tooltip.models';
import { PillboxColumnContent, PillboxContent, PillboxContentPair, PillboxContentType, PillboxFraction } from './pillbox.models';

// TODO:
// - code/function comments
// - innerHTML

// Not implementing 'id' until it's proven necessary. I.e. to re-use ids elsewhere
// for aria-labeledby etc. Tooltips can accept 'id' values, but utility isn't immediately
// apparent. If id control in Tooltip is required, we can still pass it in with TooltipModel

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
      }
    }
  }

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
