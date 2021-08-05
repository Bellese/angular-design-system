import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppPanelComponent } from './panel.component';
import { PlusModule } from '../plus/plus.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppPanelComponent', () => {
  let component: AppPanelComponent;
  let fixture: ComponentFixture<AppPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PlusModule, FontAwesomeModule],
      declarations: [AppPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
