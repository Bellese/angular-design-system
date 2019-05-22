import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardClusterComponent } from './card-cluster.component';

describe('AppCardClusterComponent', () => {
  let component: AppCardClusterComponent;
  let fixture: ComponentFixture<AppCardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
