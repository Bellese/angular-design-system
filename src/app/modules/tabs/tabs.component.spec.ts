import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppTabsComponent } from './tabs.component';

describe('AppTabsComponent', () => {
  let component: AppTabsComponent;
  let fixture: ComponentFixture<AppTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
