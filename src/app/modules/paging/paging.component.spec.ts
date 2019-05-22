import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginationComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: AppPaginationComponent;
  let fixture: ComponentFixture<AppPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
