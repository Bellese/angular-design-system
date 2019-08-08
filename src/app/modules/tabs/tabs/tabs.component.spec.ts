import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabPanelComponent } from './tab-panel.component';

describe('AppTabPanelComponent', () => {
  let component: AppTabPanelComponent;
  let fixture: ComponentFixture<AppTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
