import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModel } from '../tooltip/tooltip.models';
import { PillboxContent, PillboxFraction } from './pillbox.models';

// TODO:
// - aria-labeledby / aria-describedby?
// - single-only gets center justified text
// - id
// - hqrDataTest

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
    const styleDefault = 'ds-u-font-size--base';
    const styleBold = 'ds-u-font-weight--bold';

    let fractionTooltip: TooltipModel;

    // Fraction use case overrides pretty much everything
    if (this.contentFraction) {
      const fractionRate = this.contentFraction.rate > 0 ?
        formatPercent(this.contentFraction.rate, 'en-us') : 'n/a';

      this.contentFraction.rateLabel = this.contentFraction.rateLabel ?? 'Rate';

      fractionTooltip = this.makeTooltipModel(this.contentFraction.rateTooltip, fractionRate);
      fractionTooltip.ariaLabel = `${this.contentFraction.rateLabel} is
        ${fractionRate != 'n/a' ? fractionRate : 'Not Applicable'}`;

      this.contentFirst = <PillboxContent[]>[
        {
          label: this.contentFraction.numeratorLabel ?? 'Numerator',
        },
        {
          label: this.contentFraction.denominatorLabel ?? 'Denominator',
        },
      ];

      this.contentFirst.forEach((c) => {
        this.setContent(c);
      })

      this.contentSecond = <PillboxContent[]>[
        {
          label: this.contentFraction.rateLabel,
          classes: styleDefault,
        },
        {
          label: fractionRate,
          classes: `ds-u-font-size--lead`,
          bold: true,
          tooltipModel: fractionTooltip,
        },
      ];

      this.contentSecond.forEach((c) => {
        this.setContent(c);
      });
    } else if (this.contentSecond) {
      this.contentFirst.forEach((c) => {
        this.setContent(c);
      });

      this.contentSecond.forEach((c) => {
        this.setContent(c);
      });
    } else {
      this.contentFirst.forEach((c) => {
        this.setContent(c);
      });
    }
  }

  private setContent(c: PillboxContent) {
    // Set default style/classes if none provided
    if (!c.classes) {
      c.classes = 'ds-u-font-size--base ds-u-leading--base'
    }

    if (c.bold) {
      c.classes = `${c.classes} ds-u-font-weight--bold`;
    }

    // Honor provided TooltipModel, otherwise set default with provided tooltip content
    if (c.tooltip || c.tooltipModel) {
      c.tooltipModel = c.tooltipModel ?? this.makeTooltipModel(c.tooltip, c.label);
    }
  }

  private makeTooltipModel(tip: string, label: string): TooltipModel {
    let model : TooltipModel;

    model = new TooltipModel({
      triggerContent: label,
      tooltipContent: tip,
      maxWidth: 148,
    });

    return model;
  }
}
