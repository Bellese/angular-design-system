import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppPaginationComponent } from './paging.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PagingComponent', () => {
  let component: AppPaginationComponent;
  let fixture: ComponentFixture<AppPaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule],
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
