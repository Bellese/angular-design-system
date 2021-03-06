import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverComponent } from './popover.component';
import { PopoverModel, PopoverItemModel } from './popover.model';
import { PopoverModule } from './popover.module';

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;
  const mockPopoverModel = new PopoverModel();
  const mockPopoverItemModel = new PopoverItemModel();
  mockPopoverModel.items = [mockPopoverItemModel];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PopoverModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    component.popoverModel = mockPopoverModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
