import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagination } from './paging.component';

describe('PagingComponent', () => {
  let component: AppPagination;
  let fixture: ComponentFixture<AppPagination>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPagination ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
