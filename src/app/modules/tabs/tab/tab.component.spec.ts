import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabComponent } from './tab.component';

describe('AppTabComponent', () => {
  let component: AppTabComponent;
  let fixture: ComponentFixture<AppTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
