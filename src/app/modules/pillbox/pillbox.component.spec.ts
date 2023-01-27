import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TooltipModel } from '../tooltip/tooltip.models';

import { AppPillboxComponent } from './pillbox.component';
import { PillboxColumnContent, PillboxContent, PillboxContentPair, PillboxFraction } from './pillbox.models';

describe('PillboxComponent', () => {
  let component: AppPillboxComponent;
  let fixture: ComponentFixture<AppPillboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPillboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPillboxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.data = {
      label: '',
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should handle PillboxFraction', () => {
      const mockLeft = <PillboxColumnContent>{
        top: { label: 'leftTop' },
        bottom: { label: 'leftBottom' },
      };
      const mockRight = <PillboxColumnContent>{
        top: { label: 'rightTop' },
        bottom: { label: 'rightBottom'},
      };
      const mockFrac = <PillboxFraction>{
        numerator: 1,
        denominator: 2,
        rate: .1,
        rateTooltip: '',
      };

      component.data = mockFrac;
      const makeFracSpy = spyOn<any>(component, 'makeFractionContent').and.returnValue({left: mockLeft, right: mockRight});
      fixture.detectChanges();

      expect(makeFracSpy).toHaveBeenCalled();
      expect(component.contentFirst).toEqual(mockLeft);
      expect(component.contentSecond).toEqual(mockRight);
      expect(component.contentFraction).toEqual(mockFrac);
    });

    it('should handle PillboxContentPair', () => {
      const mockLeft = <PillboxColumnContent>{
        top: { label: 'leftTop' },
        bottom: { label: 'leftBottom' },
      };
      const mockRight = <PillboxColumnContent>{
        top: { label: 'rightTop' },
        bottom: { label: 'rightBottom'},
      };

      component.data = { left: mockLeft, right: mockRight };
      const makePairSpy = spyOn<any>(component, 'makePairContent').and.returnValue({left: mockLeft, right: mockRight});
      fixture.detectChanges();

      expect(makePairSpy).toHaveBeenCalled();
      expect(component.contentFirst).toEqual(mockLeft);
      expect(component.contentSecond).toEqual(mockRight);
      expect(component.contentFraction).toBeNull();
    });

    it('should handle PillboxColumnContent', () => {
      const mockCol = <PillboxColumnContent>{
        top: { label: 'rightTop' },
        bottom: { label: 'rightBottom'},
      };

      component.data = mockCol;
      const setContentSpy = spyOn<any>(component, 'setContent').and.stub();
      fixture.detectChanges();

      expect(setContentSpy).toHaveBeenCalledWith(mockCol.top);
      expect(setContentSpy).toHaveBeenCalledWith(mockCol.bottom);
      expect(component.contentFirst).toEqual(mockCol);
      expect(component.contentFraction).toBeNull();
    });

    it('should handle PillboxContent', () => {
      const mockContent = <PillboxContent>{
        label: 'content',
      };

      component.data = mockContent;
      const setContentSpy = spyOn<any>(component, 'setContent').and.stub();
      fixture.detectChanges();

      expect(setContentSpy).toHaveBeenCalledWith(mockContent);
      expect(component.contentFirst).toEqual({ top: mockContent, bottom: null});
      expect(component.contentFraction).toBeNull();
    });
  });

  describe('setContent', () => {
    const mockToolTip = new TooltipModel({
      triggerContent: 'trigger',
      tooltipContent: 'tip',
      maxWidth: 1,
      id: '',
    });

    beforeEach(() => {
      component.data = {
        label: '',
      }
      fixture.detectChanges();
    });

    it('should handle defaults for only label provided', () => {
      let c = <PillboxContent>{
        label: 'label',
      };

      component['setContent'](c);
      expect(c.classes).toBe('ds-u-font-size--base');
      expect(c.tooltipModel).toBeFalsy();
      expect(c.hqrDataTest).toBe('');
    });

    it('should bold and simple tooltip', () => {
      let c = <PillboxContent>{
        label: 'label',
        bold: true,
        tooltip: 'something',
      };
      const makeTooltipSpy = spyOn<any>(component, 'makeTooltipModel').and.returnValue(mockToolTip);

      component['setContent'](c);
      expect(makeTooltipSpy).toHaveBeenCalled();
      expect(c.classes).toBe('ds-u-font-size--base ds-u-font-weight--bold');
      expect(c.tooltipModel).toEqual(mockToolTip);
      expect(c.hqrDataTest).toBe('');
    });

    it('should handle tooltipModel and hqrDataTtest', () => {
      let c = <PillboxContent>{
        label: 'label',
        tooltipModel: mockToolTip,
        hqrDataTest: 'hey-there',
      };
      const makeTooltipSpy = spyOn<any>(component, 'makeTooltipModel');

      component['setContent'](c);
      expect(makeTooltipSpy).not.toHaveBeenCalled();
      expect(c.classes).toBe('ds-u-font-size--base');
      expect(c.tooltipModel).toEqual(mockToolTip);
      expect(c.hqrDataTest).toBe('hey-there');
    });
  });

  describe('makeTooltipModel', () => {
    beforeEach(() => {
      component.data = {
        label: '',
      }
      fixture.detectChanges();
    });
    it('should return a TooltipModel', () => {
      const mockToolTip = new TooltipModel({
        triggerContent: 'trigger',
        tooltipContent: 'tip',
        maxWidth: 148,
        id: '',
      });

      expect(component['makeTooltipModel']('tip', 'trigger')).toEqual(mockToolTip);
    });
  });

  describe('makePairContent', () => {
    beforeEach(() => {
      component.data = {
        label: '',
      }
      fixture.detectChanges();
    });

    it('should handle PillboxContent for both sides', () => {
      const c = <PillboxContentPair>{
        left: { label: 'yep', },
        right: { label: 'nope', },
      };
      const left = <PillboxColumnContent>{
        top: { label: 'yep' },
        bottom: null,
      };
      const right = <PillboxColumnContent>{
        top: { label: 'nope', },
        bottom: null,
      };
      const setContentSpy = spyOn<any>(component, 'setContent');

      expect(component['makePairContent'](c)).toEqual({left: left, right: right});
      expect(setContentSpy).toHaveBeenCalledWith(left.top);
      expect(setContentSpy).not.toHaveBeenCalledWith(left.bottom);
      expect(setContentSpy).toHaveBeenCalledWith(right.top);
      expect(setContentSpy).not.toHaveBeenCalledWith(right.bottom);
    });

    it('should handle PillboxColumnContent for both sides', () => {
      const left = <PillboxColumnContent>{
        top: { label: 'yep' },
        bottom: { label: 'hah' },
      };
      const right = <PillboxColumnContent>{
        top: { label: 'nope', },
        bottom: { label: 'lol' },
      };
      const setContentSpy = spyOn<any>(component, 'setContent');

      expect(component['makePairContent']({left: left, right: right})).toEqual({left: left, right: right});
      expect(setContentSpy).toHaveBeenCalledWith(left.top);
      expect(setContentSpy).toHaveBeenCalledWith(left.bottom);
      expect(setContentSpy).toHaveBeenCalledWith(right.top);
      expect(setContentSpy).toHaveBeenCalledWith(right.bottom);
    });
  });

  describe('makeFractionContent', () => {
    beforeEach(() => {
      component.data = {
        label: '',
      }
      fixture.detectChanges();
    });

    it('handles only values, non-zero rate', () => {
      const frac = <PillboxFraction>{
        numerator: 1,
        denominator: 2,
        rate: 0.1,
        rateTooltip: 'have a nice day',
      };
      const mockToolTip = new TooltipModel({
        triggerContent: 'trigger',
        tooltipContent: 'tip',
        maxWidth: 1,
        id: '',
      });
      const left = <PillboxColumnContent>{
        top: { label: 'Numerator' },
        bottom: { label: 'Denominator' },
      };
      const right = <PillboxColumnContent>{
        top: { label: 'Rate' },
        bottom: {
          label: '10%',
          classes: `ds-u-font-size--lead`,
          bold: true,
          tooltipModel: mockToolTip,
        },
      };
      const makeTooltipModelSpy = spyOn<any>(component, 'makeTooltipModel').and.returnValue(mockToolTip);
      const setContentSpy = spyOn<any>(component, 'setContent');

      expect(component['makeFractionContent'](frac)).toEqual({left: left, right: right});
      expect(makeTooltipModelSpy).toHaveBeenCalledWith(frac.rateTooltip, '10%');
      expect(setContentSpy).toHaveBeenCalledWith(left.top);
      expect(setContentSpy).toHaveBeenCalledWith(left.bottom);
      expect(setContentSpy).toHaveBeenCalledWith(right.top);
      expect(setContentSpy).toHaveBeenCalledWith(right.bottom);
    });

    it('handles label overrides, zero rate', () => {
      const frac = <PillboxFraction>{
        numerator: 1,
        numeratorLabel: 'seagulls',
        denominator: 2,
        denominatorLabel: 'stop it',
        rate: 0,
        rateLabel: 'now',
        rateTooltip: 'that log had a child',
      };
      const mockToolTip = new TooltipModel({
        triggerContent: 'trigger',
        tooltipContent: 'tip',
        maxWidth: 1,
        id: '',
      });
      const left = <PillboxColumnContent>{
        top: { label: 'seagulls' },
        bottom: { label: 'stop it' },
      };
      const right = <PillboxColumnContent>{
        top: { label: 'now' },
        bottom: {
          label: 'n/a',
          classes: `ds-u-font-size--lead`,
          bold: true,
          tooltipModel: mockToolTip,
        },
      };
      const makeTooltipModelSpy = spyOn<any>(component, 'makeTooltipModel').and.returnValue(mockToolTip);
      const setContentSpy = spyOn<any>(component, 'setContent');

      expect(component['makeFractionContent'](frac)).toEqual({left: left, right: right});
      expect(makeTooltipModelSpy).toHaveBeenCalledWith(frac.rateTooltip, 'n/a');
      expect(setContentSpy).toHaveBeenCalledWith(left.top);
      expect(setContentSpy).toHaveBeenCalledWith(left.bottom);
      expect(setContentSpy).toHaveBeenCalledWith(right.top);
      expect(setContentSpy).toHaveBeenCalledWith(right.bottom);
    });
  });
});
