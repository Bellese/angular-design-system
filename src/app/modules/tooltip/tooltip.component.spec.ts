import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { TooltipComponent } from './tooltip.component';
import { TooltipModel, TooltipTriggerTypeEnum } from './tooltip.models';
import { TooltipModule } from './tooltip.module';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TooltipModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    component.tooltipModel = new TooltipModel({
      triggerContent: 'trigger content',
      triggerIcon: faInfoCircle,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create link', () => {
    component.tooltipModel = new TooltipModel({ triggerType: TooltipTriggerTypeEnum.LINK });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create button', () => {
    component.tooltipModel = new TooltipModel({
      triggerType: TooltipTriggerTypeEnum.BUTTON,
      triggerIcon: null,
      triggerContent: null,
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
