import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClusterComponent } from './card-cluster.component';

describe('CardClusterComponent', () => {
  let component: CardClusterComponent;
  let fixture: ComponentFixture<CardClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
