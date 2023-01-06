import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModel } from '../tooltip/tooltip.models';
import { PillboxContent, PillboxFraction } from './pillbox.models';

// TODO:
// - id
// - hqrDataTest
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
  @Input() contentFirst!: PillboxContent[];
  @Input() contentSecond?: PillboxContent[] = null;
  @Input() contentFraction?: PillboxFraction = null;

  ngOnInit(): void {
    // Fraction use case overrides pretty much everything
    if (this.contentFraction) {
      let { first, second } = this.makeFractionContent(this.contentFraction);
      this.contentFirst = first;
      this.contentSecond = second;
    } else if (this.contentSecond) {
      this.contentFirst = this.trimAndSetContent(this.contentFirst);
      this.contentSecond = this.trimAndSetContent(this.contentSecond);
    } else {
      this.contentFirst = this.trimAndSetContent(this.contentFirst);
    }
  }

  private trimAndSetContent(contents: PillboxContent[]): PillboxContent[] {
    // Max 2 PillboxContent per section
    let cFinal = contents.slice(0, 2);

    cFinal.forEach((c) => {
      this.setContent(c);
    });

    return cFinal;
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
      c.hqrDataTest = 'fart';
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

  private makeFractionContent(frac: PillboxFraction): {first: PillboxContent[], second: PillboxContent[]} {
    let fractionTooltip: TooltipModel;
    const fractionRate = frac.rate > 0 ? formatPercent(frac.rate, 'en-us') : 'n/a';

    frac.rateLabel = frac.rateLabel ?? 'Rate';

    fractionTooltip = this.makeTooltipModel(frac.rateTooltip, fractionRate);
    fractionTooltip.ariaLabel = `${frac.rateLabel} is
      ${fractionRate != 'n/a' ? fractionRate : 'Not Applicable'}`;

    let first = <PillboxContent[]>[
      {
        label: frac.numeratorLabel ?? 'Numerator',
      },
      {
        label: frac.denominatorLabel ?? 'Denominator',
      },
    ];

    first.forEach((c) => {
      this.setContent(c);
    })

    let second = <PillboxContent[]>[
      {
        label: frac.rateLabel,
      },
      {
        label: fractionRate,
        classes: `ds-u-font-size--lead`,
        bold: true,
        tooltipModel: fractionTooltip,
      },
    ];

    second.forEach((c) => {
      this.setContent(c);
    });

    return {first, second};
  }
}
