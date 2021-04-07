import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppCardClusterComponent } from './card-cluster.component';
import { CardClusterModel } from './card-cluster.models';

describe('AppCardClusterComponent', () => {
  let component: AppCardClusterComponent;
  let fixture: ComponentFixture<AppCardClusterComponent>;
  const mockCardCluster = new CardClusterModel();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardClusterComponent);
    component = fixture.componentInstance;
    component.cardArray = mockCardCluster;
    component.cardArray.cluster = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
