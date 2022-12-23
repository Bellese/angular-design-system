import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPillboxComponent } from './pillbox.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
